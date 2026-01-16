# GitHub Repository Setup Instructions

Your project has been initialized with git and committed locally. Follow these steps to push to GitHub:

## Option 1: Create Repository on GitHub Website

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `labix-restaurant` (or your preferred name)
4. Description: "Premium Nigerian restaurant website with dining, pastries, and gaming lounge"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Option 2: Use GitHub CLI (if installed)

```bash
gh repo create labix-restaurant --public --source=. --remote=origin --push
```

## After Creating the Repository

Run these commands to connect and push:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/labix-restaurant.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/labix-restaurant.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Your Repository is Ready!

Once pushed, your code will be available at:
`https://github.com/YOUR_USERNAME/labix-restaurant`

## Next Steps

- Deploy to Vercel: Connect your GitHub repo to Vercel for automatic deployments
- Add collaborators: Invite team members to contribute
- Set up CI/CD: Automate testing and deployment
