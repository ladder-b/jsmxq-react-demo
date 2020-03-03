Jsmxq.React simple example.
This example include one input field, which accepts letter and numbers.

There are three major parts of this app
1. Main App - implemented by App component.
2. Edit component - implemented by JsmxEdit component.
3. Simple validator - implemented by file validator.js.

Message flow is like this.

1. Whenever user modifies input text field, JsmxEdit component posts a message containing change.
2. This message is received by App component. After reception of this message App posts another message.
3. The message from App component is read by Validator component.
4. Validator validates message and posts messages and specifies a subject based on processed message.
5. Message from validator is received by App component.
6. App component updates its state causing, input filed to update.