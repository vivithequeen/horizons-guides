---
title: Hosting on Nest
description: how to host your API or app on Hack Club's Nest
sidebar:
  order: 4
---

# Hosting on Nest

---

## What is Nest?

Nest is Hack Club's own hosting platform. It's 100% free, supports custom domains, and is a great way to learn how hosting actually works under the hood — you get a real Linux container and full control over it.

> **Warning:** Nest can be quite unreliable at times, and it may go down for extended periods. If you get hit by downtime while shipping, reach out and things can still get reviewed — check out other hosting options like Fly.io or Cloudflare Tunnels if you need something more stable.

## Before you start

You'll need an SSH client and a keypair. Your terminal works fine for this, or you can use a dedicated client like Termius.

1. Run `ssh-keygen` in your terminal. Hit enter to accept the default file location, and add a passphrase or don't — it doesn't matter much.
2. Grab the public key it just generated:
   ```bash
   # Mac/Linux
   cat ~/.ssh/id_ed25519.pub
   ```
   ```powershell
   # Windows (Powershell)
   type $env:USERPROFILE\.ssh\id_ed25519.pub
   ```
3. It'll look something like this:
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOrbeJygKoGcrBHx0MxeBKF2KcdB2PQd1HH36aVzTPWP demo@raspapi
   ```

> **Note:** DO NOT EVER SHARE YOUR PRIVATE KEY. Only share your **public** key (the one ending in `.pub`). The private key is effectively your password.

Keep that public key handy — you'll need it in a second.

## Getting set up

1. Head to [dashboard.hackclub.app](https://dashboard.hackclub.app) and pick a username. This becomes your automatic subdomain — e.g. `anything.yourname.hackclub.app` — and you'll be typing it a lot, so choose wisely.
2. Paste in your public key and submit. This can take up to a few days to get approved, so be patient.
3. Once you're in, you'll land on a dashboard with a command to connect to your container, something like:
   ```bash
   ssh you@yourname.hackclub.app
   ```
4. Run that, and you should be dropped into a terminal that looks like:
   ```
   root@yourname:~#
   ```

## Deploying your app

Install the basics first:

```bash
apt-get install git curl
```

This guide deploys a FastAPI Python app as an example, but the same idea applies to other languages — just swap the startup command.

1. Clone your repo (it should be public for submission anyway):
   ```bash
   git clone https://github.com/some/jellybeans
   cd jellybeans
   ```
2. For Python projects, [`uv`](https://astral.sh/uv) makes dependency management painless. Install it:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```
3. Disconnect (`ctrl-d`) and reconnect so your shell picks up the new environment.
4. Test that your app runs:
   ```bash
   uv run main.py
   ```
   You should see something like:
   ```
   INFO:     Started server process [1234]
   INFO:     Waiting for application startup.
   INFO:     Application startup complete.
   INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
   ```
5. Stop it with `ctrl-c` — we don't want it only running while we're connected.

## Keeping it running with systemd

You want your app to survive disconnects, crashes, and reboots. `systemd` handles all of that.

1. Create a new service file (name it whatever you like):
   ```bash
   nano /etc/systemd/system/jellybeans.service
   ```
2. Paste in something like this, swapping in your own paths:
   ```ini
   [Unit]
   Description=Jellybeans
   After=network.target

   [Service]
   Type=simple
   User=root
   WorkingDirectory=/root/jellybeans
   ExecStart=/root/.local/bin/uv run main.py
   Restart=always
   RestartSec=10

   [Install]
   WantedBy=multi-user.target
   ```
3. Enable and start it:
   ```bash
   systemctl daemon-reload
   systemctl enable jellybeans
   systemctl start jellybeans
   ```
4. Check it's alive:
   ```bash
   systemctl status jellybeans
   curl localhost:8000
   ```
   If `curl` says `Connection refused`, something went wrong — check `journalctl -u jellybeans` for errors.
5. Made changes to your code? Just edit the files, then run `systemctl restart jellybeans` to pick them up.

## Connecting it to the internet

1. In the Nest dashboard, go to **Domains** and add your desired subdomain (e.g. `jellybeans.yourname.hackclub.app`).
2. Set the target as your container's internal IP and the port your app listens on, e.g. `10.60.0.1:8000`.
3. Click add, wait a moment, and visit your new subdomain — your app should be live!

> **Note:** If the URL errors out, your app might not be listening on the right interface. For Uvicorn, change `uvicorn.run(app)` to `uvicorn.run(app, host="0.0.0.0")` so it listens on all interfaces, not just localhost.

## Custom domains

Want to use your own domain instead? Here's how:

1. In your DNS provider, create a CNAME record for your desired domain (e.g. `jellybeans.dino.icu`) pointing to `username.hackclub.app`.
2. Add a TXT record for verification: `yourdomain.com` → `domain-verification=username`.
3. Wait for DNS to propagate, then add the domain in the Nest dashboard the same way you added the subdomain above, but using your custom domain.
4. Give it a bit of time if it doesn't work right away — DNS propagation can be slow.

And that's it — your project is live on the internet on your very own domain. Nice work!

*Adapted from [RaspAPI's Nest hosting guide](https://raspapi.hackclub.com/guides/hosting/nest).*
