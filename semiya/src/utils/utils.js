export const textAreaSubmitEvent = (e) => {
    e.preventDefault();
    if(e.keyCode == 13) {
        document.getElementById("formId").preventDefault()
        document.getElementById("formId").submit();
        console.log("enviaste el form");
    }
    return;
}