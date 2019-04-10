firebase.initializeApp({
  apiKey: "AIzaSyDSU2DdELL4t0jH0tAXdAAMBorJmYohVog",
  authDomain: "tukio-ad0bb.firebaseapp.com",
  projectId: "tukio-ad0bb"
});

var db = firebase.firestore();

let name, email, role, year_group, password, lg_email, lg_password;

document.addEventListener("deviceready", () => {
  $("#bt_register").click(() => {
    name = $("#name").val();
    email = $("#email-reg").val();
    role = $("#role option:selected").text();
    year_group = $("#year-group").val();
    password = $("#password").val();

    db.collection("user")
      .doc(email)
      .set({
        name,
        role,
        year_group,
        password
      })
      .then(function() {
        console.log("Document successfully written!");
        alert("done");
        window.location.href = "index.html";
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  });
  $("#bt_login").click(() => { 
    lg_email = $("#lg_email").val();
    lg_password = $("#lg_password").val();
    db.collection("user")
      .doc(lg_email)
      .get()
      .then(doc => {
        if (doc.exists && doc.data().password === lg_password)
          window.location.href = "#convo-page";
        else alert("error in credentials");
      })
      .catch(err => console.log(err));
  });
});

// $("#bt_register").click(() => {
//   const name = $("#name").val();
//   const email = $("#email-reg").val();
//   const role = $("#role option:selected").text();
//   const year_group = $("#year-group").val();
//   const password = $("#password").val();

//   alert(name);
//   console.log(email);
//   console.log(role);
//   console.log(year_group);
//   console.log(password);

//   $("#reg_form").trigger("reset");
// });
