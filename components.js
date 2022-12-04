function goToDifferentPage(name) {
  window.open(`${name}.html`, "_self");
}

function submitQuery(event, formId) {
  event.preventDefault();
  const contactFormElements = document.getElementById(formId).elements;
  console.log(contactFormElements)
  const name = encodeURIComponent(contactFormElements['name'].value.trim());
  const subject = encodeURIComponent(contactFormElements['subject'].value.trim() || `Query from ${name}`);
  let body = contactFormElements['body'].value.trim();
  if (name != "" && body != "") {
    body = encodeURIComponent(`Enquiry: ${body}\n\nFrom: ${name}`);
    window.location.href = `mailto:hello@sendnet.co?subject=${subject}&body=${body}`;
  }
}
