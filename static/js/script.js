document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const queryInput = document.getElementById("queryInput");
    const chatArea = document.getElementById("chatArea");

    function appendMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
        messageDiv.innerHTML = formatMessage(message);
        chatArea.appendChild(messageDiv);
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    function formatMessage(message) {
        return message
            .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
            .replace(/\* (.*?)(?=\n|\*|$)/g, "<ul><li>$1</li></ul>")
            .replace(/\n/g, "<br>");
    }

    async function sendQuery() {
        const userQuery = queryInput.value.trim();
        if (!userQuery) return;

        appendMessage(userQuery, "user");
        queryInput.value = "";

        try {
            const response = await fetch("/run_api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: userQuery })
            });

            const data = await response.json();
            appendMessage(data.response, "bot");
        } catch (error) {
            appendMessage("Oops! Something went wrong. Try again later.", "bot");
        }
    }

    submitButton.addEventListener("click", sendQuery);
    queryInput.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            sendQuery();
        }
    });
});
