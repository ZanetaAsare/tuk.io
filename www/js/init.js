const config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};

document.addEventListener(
  "deviceready",
  () => {
    handleRegister();
  },
  false
);

const handleRegister = () => {
  $("#bt_register").click(() => {
    const name = $("#name").val();
    const email = $("#email-reg").val();
    const role = $("#role option:selected").text();
    const year_group = $("#year-group").val();
    const password = $("#password").val();

    console.log(name);
    console.log(email);
    console.log(role);
    console.log(year_group);
    console.log(password);

    $("#reg_form").trigger("reset");
  });
};
