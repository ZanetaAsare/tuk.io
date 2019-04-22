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
      .then(function () {
        console.log("Document successfully written!");
        alert("You've registered successfully");
        window.location.href = "index.html";
      })
      .catch(function (error) {
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
        if (doc.exists && doc.data().password === lg_password) {
          $("#loginform").trigger("reset");
          window.location.href = "#convo-page";
        }
        else { $("#lg_password").val(''); alert("Error in credentials"); };
      })
      .catch(err => alert(err));
  });

  // set form show triggers
  $("#tag").on('change', evt => { 
    const element = document.getElementById("if_event_tag");
    element.style.display === "none" ? element.style.display = "block" : element.style.display = "none";

  });

  $("#bt_add").on("click", () => {
    let title, description, category, tag, organizer, location, date, time;
    
    title = $('#input_title').val();
    description = $('#input_desc').val();
    category = $("#category option:selected").text();
    tag = $("#tag option:selected").text();
    organizer = $('#organizer').val();
    location = $('#location').val();
    date = $('#date').val();
    time = $('#time').val();

    // var finished_notice = document.createElement('div');
    // var paragraph = document.createElement('p');
    // var node = document.createTextNode(title);
    // finished_notice.id = 'note';
    // paragraph.appendChild(node);
    // finished_notice.appendChild(paragraph);

    
    // document.getElementById("notes").appendChild(finished_notice);

    if (tag === 'event') {
      console.log('event');
      var content_upcoming = "<div data-role='collapsible' id='eventU" + nextId + "'>< h3 > " + title + "</h3> <p>" + description + "</p> <br><hr>Category: " + category + "<br><hr>Organized by: " + organizer + "<br><hr>Date: " + date + "<br><hr>Time: " + time + "<br><hr>Location: " + location + "</div>";
      $("#eventU").append(content_upcoming).collapsibleset("refresh");

    }

    // updating collapsible rows of notices
    var nextId = 1;
    nextId++;
    var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>" + title + "</h3><p>" + description + "</p><br>Category: "+ category +"</div>";
    $("#set").append(content).collapsibleset("refresh");



    // if event tag selected, only run this code
    
    // updating collapsible rows of upcoming events
    
          
      });
    
});  