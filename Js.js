document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form data
  var formData = new FormData(event.target);

  // Display acknowledgment screen
  document.getElementById("acknowledgmentScreen").style.display = "block";

  // Generate random service ID
  var serviceId = Math.floor(Math.random() * 1000000);

  // Populate acknowledgment screen with form data
  document.getElementById("serviceId").innerText = serviceId;
  document.getElementById("vendorName").innerText = formData.get("vendor");
  document.getElementById("bookingDateSlot").innerText = formData.get("dateSlot");
  
  // Get the amount based on the selected vendor
  var selectedVendor = formData.get("vendor");
  var amount = "";
  if (selectedVendor === "Vendor 1") {
    amount = "800";
  } else if (selectedVendor === "Vendor 2") {
    amount = "1500";
  } else if (selectedVendor === "Vendor 3") {
    amount = "2000";
  }
  document.getElementById("bookingAmount").innerText = amount;
});
// Define the amounts for each vendor
const vendorAmounts = {
  "Vendor 1": 800,
  "Vendor 2": 1500,
  "Vendor 3": 2000
};

// Function to update the amount based on the selected vendor
function updateAmount() {
  var selectedVendor = document.getElementById("vendor").value;
  var amountField = document.getElementById("amount");
  if (selectedVendor in vendorAmounts) {
    amountField.value = vendorAmounts[selectedVendor];
  } else {
    amountField.value = "";
  }
}

// Update the amount when the vendor selection changes
document.getElementById("vendor").addEventListener("change", updateAmount);
