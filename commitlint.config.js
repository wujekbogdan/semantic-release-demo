module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0, "always", "sentence-case"], // necessary for JIRA-XX in the subject
    "jira-issue-in-subject": [2, "always"], // custom JIRA-XX format validator
  },
  plugins: [
    {
      rules: {
        "jira-issue-in-subject": function ({ subject }) {
          return [
            subject && /^([A-Z]{2,10}-[0-9]{2,10}){1,}/.test(subject),
            "Your subject should contain a JIRA issue number (ex. feat(scope): JIRA-123 short description)",
          ];
        },
      },
    },
  ],
};
