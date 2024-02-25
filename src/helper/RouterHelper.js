// paginationHelper.js

import Swal from "sweetalert2";

const successHelper = async (data) => {
  await Swal.fire({
    title: "Success",
    text: "Record added sucessfully.",
    icon: "success",
  });
};

const ConfermHelper = async (data) => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};

export { successHelper, ConfermHelper };
