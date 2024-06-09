// script.js

function kirimData(event) {
    event.preventDefault();  // Prevent the default form submission

    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var semester = document.getElementById("semester").value;
    var tanggal = document.getElementById("tanggal").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;

    Swal.fire({
        title: "Data Pendaftaran",
        html: "<b>Nama:</b> " + name + 
              "<br><b>NIM:</b> " + nim + 
              "<br><b>Semester:</b> " + semester + 
              "<br><b>Tanggal Lahir:</b> " + tanggal + 
              "<br><b>Peminatan:</b> " + peminatan + 
              "<br><b>Alamat:</b> " + alamat,
        icon: "info"
    });
}
