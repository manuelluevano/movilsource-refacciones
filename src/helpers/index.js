export async function precioDolar() {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const url = "https://api.exchangerate.host/latest?base=USD&symbols=MXN";
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error API ", error);
  }
}

export function toTitleCase(str) {
  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return titleCase;
}
