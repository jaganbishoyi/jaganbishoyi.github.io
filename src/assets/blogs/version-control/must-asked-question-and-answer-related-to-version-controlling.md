# Version Controlling / GIT

Version control is an essential tool in modern software development, allowing teams to track changes, collaborate efficiently, and maintain code history.

During technical interviews, version control concepts and practices are often tested. Key questions may cover topics like Git `branching strategies`, `conflict resolution`, `pull requests`, and common commands such as `git merge`, `git rebase`, and `git stash`. Knowing these answers will help you demonstrate your understanding of version control systems and their importance in managing code effectively.

---

#### 1. **What is Git, and how does it differ from other version control systems?**

Git is a distributed version control system (DVCS) that allows developers to work on a complete copy of the repository locally. Unlike centralized systems like SVN, Git does not rely on a central server for every operation.

**Example**: With Git, you can commit changes locally without an internet connection and later push them to the remote repository.

#### 2. **Explain the difference between `git merge` and `git rebase`. When would you use each?**

`git merge` combines two branches, preserving the history of both branches, while `git rebase` rewrites the commit history by applying changes from one branch onto another in a linear fashion.

**Example**: Use `git merge` when you want to preserve the branch's history, such as when merging a feature branch into the `main` branch. Use `git rebase` when you want to avoid merge commits and create a clean, linear history.

#### 3. **What are Git hooks, and how are they used in a project?**

Git hooks are scripts that run automatically when certain Git events occur, such as before a commit or after a merge.

**Example**: A pre-commit hook can be used to automatically run linting checks before committing code. If the code fails linting, the commit will be aborted.

#### 4. **How would you handle a merge conflict in Git?**

When a merge conflict occurs, Git marks the conflicting sections in the file. You need to manually edit the file, resolve the conflict, and then mark the file as resolved using `git add`.

**Example**: During a `git merge`, Git might raise a conflict like this:

```bash
<<<<<<< HEAD
// Changes from your branch
=======
// Changes from the branch you are merging
>>>>>> feature-branch
```

Edit the file to remove the markers and resolve the differences, then run:

```bash
git add <conflicted-file>
git commit
```

#### 5. **How do you stash changes in Git?**

Use `git stash` to temporarily save changes in your working directory that are not ready to be committed. You can apply them later using `git stash pop` or `git stash apply`.

#### 6. **Can you explain the difference between `git stash pop` and `git stash apply`?**

`git stash apply` applies the stashed changes without deleting the stash, while `git stash pop` applies the changes and removes the stash from the stash list.

**Example**: Use `git stash apply` if you want to apply the changes but keep them saved for later:

```bash
git stash apply
```

Use `git stash pop` if you're done with the stash:

```bash
git stash pop
```

#### 7. **What is the purpose of `git reflog`, and how would you use it?**

`git reflog` tracks changes to the tip of branches and can be used to recover lost commits.

**Example**: If you accidentally reset the branch, use `git reflog` to find the commit hash and reset the branch back to it:

```bash
git reflog
git reset --hard <commit-hash>
```

#### 8. **How do you undo the last commit without losing the changes?**

Use `git reset --soft HEAD~1` to undo the last commit while keeping the changes in the staging area.

**Example**:

```bash
git reset --soft HEAD~1
```

This undoes the commit but leaves the changes in the working directory so you can recommit.

#### 9. **Explain how to squash multiple commits into one.**

Use `git rebase -i HEAD~N` to start an interactive rebase, where `N` is the number of commits you want to squash.

**Example**: To squash the last 3 commits into one:

```bash
git rebase -i HEAD~3
```

In the editor, change `pick` to `squash` for the commits you want to combine.

#### 10. **How would you revert a specific commit in Git?**

Use `git revert <commit-hash>` to create a new commit that undoes the changes from the specified commit.

**Example**: If commit `abc123` introduced a bug, you can revert it with:

```bash
git revert abc123
```

#### 11. **What is the difference between `git reset`, `git checkout`, and `git revert`?**

-`git reset` moves the HEAD and branch pointer to a specific commit.
-`git checkout` switches branches or restores working tree files.
-`git revert` creates a new commit that undoes a specific commit.

**Example**:

```bash
git reset --soft HEAD~1   # Undo last commit, keep changes
git checkout develop      # Switch to 'develop' branch
git revert abc123         # Revert commit 'abc123'
```

#### 12. **What strategies do you use for managing large teams with Git?**

A common strategy is Gitflow, which separates work into branches such as `feature`, `develop`, and `main`, along with automated code reviews and CI/CD pipelines.

**Example**: In Gitflow, feature branches are merged into `develop`, and after testing, `develop` is merged into `main`.

#### 13. **How do you handle large binary files in Git?**

Use Git Large File Storage (LFS) to track large binary files, replacing them with pointers while storing the actual files in a separate storage.

**Example**: Track large files with Git LFS:

```bash
git lfs track "*.psd"
```

#### 14. **How does Git handle branching internally?**

Git branches are simply pointers to specific commits. Creating a new branch is a lightweight operation that just points to the current commit.

**Example**: When you run `git branch feature-branch`, Git creates a new pointer that points to the same commit as `HEAD`.

#### 15. **What’s the purpose of `git bisect`, and how would you use it to debug a problem?**

`git bisect` performs a binary search to find the commit that introduced a bug.

**Example**: Start bisecting with:

```bash
git bisect start
git bisect bad   # Current commit is bad
git bisect good  # Known good commit
```

Git will guide you through checking out different commits to find the faulty one.

#### 16. **What is a detached HEAD state in Git, and how do you resolve it?**

A detached HEAD state occurs when the HEAD points to a specific commit rather than a branch. This happens when you checkout a specific commit instead of a branch.

**Example**: To resolve it, create a new branch from the current state:

```bash
git checkout -b new-branch
```

#### 17. **How do you safely delete a branch in Git?**

Use `git branch -d <branch-name>` to delete a local or merged branch.

Use `git branch -D <branch-name>` to force delete an unmerged branch.

To delete a remote branch, use `git push origin --delete <branch-name>`.

#### 18. **What are submodules in Git, and when would you use them?**

Submodules allow you to include one repository inside another. They are useful for managing dependencies between projects.

**Example**: Add a submodule to your repository:

```bash
git submodule add https://github.com/owner/repo.git
```

#### 19. **Explain the significance of `.gitignore` and how it’s used.**

`.gitignore` is used to specify files and directories that Git should ignore.

**Example**: To ignore all `.log` files, add the following to `.gitignore`:

```bash
*.log
```

#### 20. **How do you create and apply patches in Git?**

Use `git format-patch` to create a patch file and `git apply` to apply it.

**Example**: Create a patch for the last commit:

```bash
git format-patch HEAD~1
```

Apply the patch:

```bash
git apply patch-file.patch
```

#### 21. **What are orphan branches, and how do you create one?**

An orphan branch is a branch that starts without any history. Use `git checkout --orphan <branch-name>` to create one.

**Example**:

```bash
git checkout --orphan gh-pages
```

#### 22. **What is the difference between `git log` and `git reflog`?**

`git log` shows the commit history, while `git reflog` tracks updates to the reference of the `HEAD`.

**Example**: Use `git reflog` to recover a commit that has been lost due to a reset or rebase.

#### 23. **How would you rename a branch in Git?**

Use `git branch -m <new-branch-name>` to rename the current branch, or `git branch -m <old-branch-name> <new-branch-name>` to rename another branch.

**Example**:

```bash
git branch -m new-feature-name
```

#### 24. **How do you track and sync a forked repository?**

Add the original repository as a remote (often named `upstream`), and sync it with `git fetch` and `git merge`.

**Example**:

```bash
git remote add upstream https://github.com/original-owner/repo.git
git fetch upstream
git merge upstream/main
```

#### 25. **What is the purpose of `git cherry-pick ? How do you perform a cherry-pick in Git?**

`git cherry-pick` applies the changes introduced by an existing commit to the current branch, useful for applying specific changes without merging entire branches. `git cherry-pick <commit-hash>` applies a specific commit from one branch to another.

**Example**:

```bash
git cherry-pick abc123
```

#### 26. **Explain the difference between `git clone` and `git fork`.**

`git clone` creates a local copy of a repository, while `fork` duplicates a repository on a remote server (e.g., GitHub).

**Example**: You fork a repository on GitHub to work independently, then `clone` your fork to your local machine.

#### 27. **How do you deal with Git subtrees?**

Subtrees are an alternative to submodules for including external repositories. They embed the external project directly into the main repository.

**Example**:

```bash
git subtree add --prefix=subdir https://github.com/user/repo.git main
```

#### 28. **What is the significance of the `HEAD` in Git?**

`HEAD` points to the current commit or branch you are working on.

**Example**: To reset your working directory to the last commit:

```bash
git reset --hard HEAD
```

#### 29. **How do you recover a deleted branch in Git?**

Use `git reflog` to find the last commit, then create a new branch at that commit.

**Example**:

```bash
git reflog
git checkout -b recovered-branch <commit-hash>
```

#### 30. **What is the difference between a fast-forward and a three-way merge in Git?**

A fast-forward merge moves the pointer forward to the new commit if no changes have been made since the branch diverged. A three-way merge combines changes from two diverging branches.

**Example**: A fast-forward merge occurs when you merge a branch that hasn’t been modified:

```bash
git merge --ff-only feature-branch
```

#### 31. **How do you check the status of your repository in Git?**

Use the `git status` command to check the current status of your working directory and staging area, showing which files have been modified, added, or deleted.

#### 32. **Explain the difference between `git clone`, `git pull`, and `git fetch`.**

- **`git clone`:** Creates a copy of a remote repository on your local machine.
- **`git pull`:** Fetches changes from a remote repository and merges them into your current branch.
- **`git fetch`:** Fetches changes from a remote repository but does not merge them; it simply updates the remote-tracking branches.

#### 33. **What is the difference between `git commit` and `git push`?**

- **`git commit`:** Records changes to the local repository.
- **`git push`:** Sends committed changes from the local repository to a remote repository.

#### 34. **How do you create a new branch in Git?**

Use the `git branch <branch-name>` command to create a new branch. You can switch to it using `git checkout <branch-name>` or create and switch using `git checkout -b <branch-name>`.

#### 35. **Explain the difference between `git diff` and `git log`.**

- **`git diff`:** Shows the differences between files in your working directory, staging area, and repository.
- **`git log`:** Displays a history of commits in the repository.

#### 36. **What is the purpose of `git tag`?**

`git tag` is used to create a snapshot or reference to a specific commit, often used to mark release points in the repository history.

#### 37. **How do you list all branches in a Git repository?**

Use `git branch` to list local branches and `git branch -r` to list remote branches. Use `git branch -a` to list all branches, both local and remote.

#### 38.  **How do you check out a specific commit in Git?**

Use `git checkout <commit-hash>` to switch to a specific commit. This puts you in a detached `HEAD` state.

#### 39.  **What is the difference between `git remote` and `git remote -v`?**

- **`git remote`:** Lists the names of all remote repositories.
- **`git remote -v`:** Lists the names and URLs of all remote repositories.

#### 40.  **How do you create a Git repository?**

Use `git init` to create a new local repository in the current directory or `git clone <repository-url>` to clone an existing remote repository.

#### 41.  **What is the purpose of `git config`?**

`git config` is used to set Git configuration options, such as user name, email, and other settings like line endings and merge tools.
