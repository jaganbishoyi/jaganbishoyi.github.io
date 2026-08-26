1. **What is Git and why is it used?**

   **Answer:**

   Git is a distributed version control system that tracks changes to files and allows multiple people to work on a project simultaneously. It is used for source code management, allowing developers to track changes, collaborate, and maintain a history of revisions.

2. **What is a Git repository?**

   **Answer:**

   A Git repository is a directory that contains all the files and directories related to a project, along with a special `.git` directory that stores the version history, configuration, and other metadata.

3. **Explain the difference between `git clone`, `git pull`, and `git fetch`.**

   **Answer:**

   - **`git clone`:** Creates a copy of a remote repository on your local machine.
   - **`git pull`:** Fetches changes from a remote repository and merges them into your current branch.
   - **`git fetch`:** Fetches changes from a remote repository but does not merge them; it simply updates the remote-tracking branches.

4. **What is the purpose of a `.gitignore` file?**

   **Answer:**

   The `.gitignore` file specifies files and directories that should not be tracked by Git. It is useful for excluding temporary files, build artifacts, and sensitive information from version control.

5. **How do you check the status of your repository in Git?**

   **Answer:**

   Use the `git status` command to check the current status of your working directory and staging area, showing which files have been modified, added, or deleted.

6. **What is the difference between `git commit` and `git push`?**

   **Answer:**

   - **`git commit`:** Records changes to the local repository.
   - **`git push`:** Sends committed changes from the local repository to a remote repository.

7. **How do you create a new branch in Git?**

   **Answer:**

   Use the `git branch <branch-name>` command to create a new branch. You can switch to it using `git checkout <branch-name>` or create and switch using `git checkout -b <branch-name>`.

8. **What is the purpose of `git merge` and `git rebase`?**

   **Answer:**

   - **`git merge`:** Combines the changes from one branch into another, creating a merge commit.
   - **`git rebase`:** Reapplies commits from one branch onto another, creating a linear history.

9. **How do you resolve merge conflicts in Git?**

   **Answer:**

   When a merge conflict occurs, Git marks the conflicted areas in the files. You can manually edit these conflicts, then stage the resolved files using `git add` and complete the merge with `git commit`.

10. **What is a remote repository in Git?**

    **Answer:**

    A remote repository is a version of your project hosted on the internet or another network. It allows you to collaborate with others by pushing and pulling changes to and from the remote.

11. **Explain the concept of `HEAD` in Git.**

    **Answer:**

    `HEAD` is a pointer that represents your current position in the Git history. It usually points to the latest commit on the current branch.

12. **What is a detached `HEAD` state in Git?**

    **Answer:**

    A detached `HEAD` state occurs when `HEAD` points to a commit instead of a branch. This happens when you checkout a specific commit instead of a branch.

13. **How do you revert a commit in Git?**

    **Answer:**

    Use `git revert <commit-hash>` to create a new commit that undoes the changes introduced by the specified commit.

14. **What is the difference between `git reset`, `git checkout`, and `git revert`?**

    **Answer:**

    - **`git reset`:** Moves the `HEAD` pointer to a previous commit and optionally modifies the working directory and staging area.
    - **`git checkout`:** Switches branches or restores files in the working directory.
    - **`git revert`:** Creates a new commit that undoes the changes from a previous commit.

15. **How do you stash changes in Git?**

    **Answer:**

    Use `git stash` to temporarily save changes in your working directory that are not ready to be committed. You can apply them later using `git stash pop` or `git stash apply`.

16. **What is the purpose of `git cherry-pick`?**

    **Answer:**

    `git cherry-pick` applies the changes introduced by an existing commit to the current branch, useful for applying specific changes without merging entire branches.

17. **Explain the difference between `git diff` and `git log`.**

    **Answer:**

    - **`git diff`:** Shows the differences between files in your working directory, staging area, and repository.
    - **`git log`:** Displays a history of commits in the repository.

18. **How do you delete a branch in Git?**

    **Answer:**

    Use `git branch -d <branch-name>` to delete a local branch. To delete a remote branch, use `git push origin --delete <branch-name>`.

19. **What is `git bisect` and how is it used?**

    **Answer:**

    `git bisect` helps you find a specific commit that introduced a bug by performing a binary search through the commit history. It is used by marking commits as good or bad until the problematic commit is identified.

20. **What is the purpose of `git tag`?**

    **Answer:**

    `git tag` is used to create a snapshot or reference to a specific commit, often used to mark release points in the repository history.

21. **How do you rename a branch in Git?**

    **Answer:**

    Use `git branch -m <new-branch-name>` to rename the current branch, or `git branch -m <old-branch-name> <new-branch-name>` to rename another branch.

22. **What is a submodule in Git?**

    **Answer:**

    A submodule is a Git repository nested inside another Git repository. It allows you to keep a separate repository as a dependency in your project.

23. **How do you list all branches in a Git repository?**

    **Answer:**

    Use `git branch` to list local branches and `git branch -r` to list remote branches. Use `git branch -a` to list all branches, both local and remote.

24. **How do you check out a specific commit in Git?**

    **Answer:**

    Use `git checkout <commit-hash>` to switch to a specific commit. This puts you in a detached `HEAD` state.

25. **What is the difference between `git remote` and `git remote -v`?**

    **Answer:**

    - **`git remote`:** Lists the names of all remote repositories.
    - **`git remote -v`:** Lists the names and URLs of all remote repositories.

26. **How do you create a Git repository?**

    **Answer:**

    Use `git init` to create a new local repository in the current directory or `git clone <repository-url>` to clone an existing remote repository.

27. **What is the purpose of `git config`?**

    **Answer:**

    `git config` is used to set Git configuration options, such as user name, email, and other settings like line endings and merge tools.

28. **How do you undo the last commit in Git?**

    **Answer:**

    Use `git reset --soft HEAD~1` to undo the last commit while keeping the changes in the staging area, or `git reset --hard HEAD~1` to discard the changes entirely.

29. **What is `git rebase` and how is it different from `git merge`?**

    **Answer:**

    `git rebase` moves or combines a sequence of commits to a new base commit, creating a linear history. `git merge` combines branches, preserving the history of both branches.

30. **How do you undo changes in a file that have not been staged or committed?**

    **Answer:**

    Use `git checkout -- <filename>` to discard changes in the working directory and revert the file to its last committed state.

---

## 30 Must-Use Git Commands

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
