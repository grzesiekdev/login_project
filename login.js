// pobieramy pola formularza za pomocą
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// dodajemy event handler do przycisku wysyłającego dane z foromularza
loginButton.addEventListener("click", (e) => {

    // funkcja ta powoduje ze nie zostanie wykonana standardowa akcja, w tym przypadku nie pozwalamy na odświeżenie strony przed wyświetleniem wyniku działania skryptu
    e.preventDefault();

    // Pobieramy dane z pól formularza
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // instrukcja warunkowa sprawdzająca czy dane do logowania wpisane przez użytkownika pokrywają się z tymi ustawionymi przez nas
    if (username == "test" && password == "test") {
        // wyświetlenie okienka typu "alert" ze stosowną informacją
        alert("You have successfully logged in.");

        // odświeżenie strony
        location.reload();
    } else {
        // jeśli użytkownik nie wpisał poprawnych danych logowanie to wyłączamy przezroczystość pola z komunikatem informującym o błędzie
        loginErrorMsg.style.opacity = 1;
    }
})