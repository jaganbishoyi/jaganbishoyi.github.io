# Must used Git Commands

The basic Git commands to help you learn Git, and more advanced concepts around Git branches, remote repositories, undoing changes, and more.

1. **`git init`** - Initialize a new Git repository.
2. **`git clone <repository-url>`** - Clone a remote repository.
3. **`git status`** - Check the status of your working directory and staging area.
4. **`git add <file>`** - Stage a file for commit.
5. **`git commit -m "message"`** - Commit staged changes with a message.
6. **`git push origin <branch>`** - Push changes to a remote repository.
7. **`git pull origin <branch>`** - Fetch and merge changes from a remote repository.
8. **`git fetch origin`** - Fetch changes from a remote repository without merging.
9. **`git branch`** - List all local branches.
10. **`git branch -a`** - List all branches, including remote.
11. **`git branch <branch-name>`** - Create a new branch.
12. **`git checkout <branch-name>`** - Switch to a different branch.
13. **`git checkout -b <branch-name>`** - Create and switch to a new branch.
14. **`git merge <branch-name>`** - Merge a branch into the current branch.
15. **`git rebase <branch-name>`** - Rebase the current branch onto another branch.
16. **`git log`** - Show the commit history.
17. **`git diff`** - Show differences between commits, branches, or working directory and staging area.
18. **`git reset <commit-hash>`** - Reset the current branch to a specific commit.
19. **`git revert <commit-hash>`** - Revert a commit by creating a new commit that undoes the changes.
20. **`git stash`** - Save changes temporarily and revert the working directory to a clean state.
21. **`git stash pop`** - Apply the last stashed changes and remove them from the stash.
22. **`git remote -v`** - Show the remote repository URLs.
23. **`git tag <tag-name>`** - Create a new tag pointing to the current commit.
24. **`git show <commit-hash>`** - Show the details of a specific commit.
25. **`git blame <file>`** - Show who made changes to each line of a file.
26. **`git clean -f`** - Remove untracked files from the working directory.
27. **`git cherry-pick <commit-hash>`** - Apply the changes from a specific commit to the current branch.
28. **`git bisect start`** - Start a binary search to find a commit that introduced a bug.
29. **`git rebase --interactive <commit-hash>`** - Perform an interactive rebase to edit commit history.
30. **`git config --global user.name "Your Name"`** - Set the global Git username.

For more such git commands please refer to <a href="../assets/blogs/version-control/atlassian-git-cheatsheet.pdf" target="_blank">Git cheat sheet by Atlassian</a>.
