const passcodeInputs =
    document.querySelectorAll(
        ".passcode-input"
    );


/* =========================
   AUTO MOVE TO NEXT BOX
========================= */

passcodeInputs.forEach(
    (input, index) => {

        input.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /[^0-9]/g,
                        ""
                    );


                if (
                    this.value.length === 1 &&
                    index <
                    passcodeInputs.length - 1
                ) {

                    passcodeInputs[
                        index + 1
                    ].focus();

                }

            }
        );


        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Backspace" &&
                    this.value === "" &&
                    index > 0
                ) {

                    passcodeInputs[
                        index - 1
                    ].focus();

                }


                if (
                    event.key === "Enter"
                ) {

                    checkPassword();

                }

            }
        );

    }
);



/* =========================
   CHECK PASSWORD
========================= */

function checkPassword() {


    let password = "";


    passcodeInputs.forEach(
        input => {

            password +=
                input.value;

        }
    );


    const correctPassword =
        "1501";


    const errorMessage =
        document.getElementById(
            "error-message"
        );


    if (
        password === correctPassword
    ) {


        document.getElementById(
            "password-screen"
        ).style.display =
            "none";


        document.getElementById(
            "birthday-content"
        ).style.display =
            "block";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


    }

    else {


        const funnyMessages = [

            "That was confidently wrong 😭 try again.",

            "Nice try... but absolutely not.",

            "WRONGGG 😭 please think a little harder.",

            "Ummm... who told you that was the password?",

            "Bruh 😭 try again.",

            "Almost... okay not really 😭",

            "The numbers are judging you right now."

        ];


        const randomMessage =

            funnyMessages[
                Math.floor(
                    Math.random() *
                    funnyMessages.length
                )
            ];


        errorMessage.textContent =
            randomMessage;


        passcodeInputs.forEach(
            input => {

                input.value = "";

            }
        );


        passcodeInputs[0].focus();

    }

}