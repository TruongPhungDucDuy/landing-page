document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (name === "" || phone === "" || address === "") {
        document.getElementById("message").innerText = "Vui lòng điền đầy đủ thông tin!";
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbyO_5MXHCQNaj0g20uPhcC3CdJ3c-w7TH52lpKIQe92Rw3qZSzzHaw34HprQvmotPI/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, address })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = "Đơn hàng đã được gửi thành công!";
        document.getElementById("orderForm").reset();
    })
    .catch(error => {
        document.getElementById("message").innerText = "Có lỗi xảy ra, vui lòng thử lại!";
    });
});
