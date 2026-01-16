# Push to GitHub - Quick Guide

✅ **Git repository initialized and committed!**

Your code is ready to push to GitHub. Follow these steps:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `labix-restaurant` (or your choice)
3. Description: "Premium Nigerian restaurant website - Next.js"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

### If using HTTPS:
```bash
git remote add origin https://github.com/YOUR_USERNAME/labix-restaurant.git
git push -u origin main
```

### If using SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/labix-restaurant.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Verify

After pushing, visit:
`https://github.com/YOUR_USERNAME/labix-restaurant`

You should see all your files there!

## Quick Commands Reference

```bash
# Check status
git status

# See what will be pushed
git log --oneline

# Push updates (after initial push)
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys: https://docs.github.com/en/authentication

If branch name is different:
```bash
git branch -M main  # Rename to main
```
