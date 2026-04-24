#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push

if [ -n "$GITHUB_PAT" ]; then
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Warning: current branch is '$CURRENT_BRANCH', not 'main'. Skipping GitHub sync."
    exit 0
  fi

  GITHUB_REMOTE="${GITHUB_REMOTE_URL:-https://github.com/GlobalScales32/elevation-roofing.git}"

  echo "Syncing branch '$CURRENT_BRANCH' to $GITHUB_REMOTE ..."
  git -c "credential.helper=!f() { echo username=x-access-token; echo password=\$GITHUB_PAT; }; f" \
    push "$GITHUB_REMOTE" main

  echo "GitHub sync complete."
else
  echo "Warning: GITHUB_PAT not set, skipping GitHub sync"
fi
