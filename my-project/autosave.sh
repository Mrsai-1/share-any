cd /Users/nexgenfmpl/Documents/projects/share-any/my-project

git checkout autosave/phani


# Check if there are changes
if [[ -n $(git status --porcelain) ]]; then
    git add .
    git commit -m "Auto commit at $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin autosave/phani
else
    echo "No changes to commit."
fi