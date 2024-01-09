const data = [{
        "pincode": "110001",
        "estimatedDeliveryDays": 2,
        "locationName": "Connaught Place, Delhi"
    },
    {
        "pincode": "400001",
        "estimatedDeliveryDays": 3,
        "locationName": "Fort, Mumbai"
    },
    {
        "pincode": "700001",
        "estimatedDeliveryDays": 4,
        "locationName": "Dalhousie Square, Kolkata"
    },
    {
        "pincode": "600001",
        "estimatedDeliveryDays": 3,
        "locationName": "Parrys Corner, Chennai"
    },
    {
        "pincode": "500001",
        "estimatedDeliveryDays": 2,
        "locationName": "Afzal Gunj, Hyderabad"
    },
    {
        "pincode": "110020",
        "estimatedDeliveryDays": 5,
        "locationName": "Hauz Khas, Delhi"
    },
    {
        "pincode": "400020",
        "estimatedDeliveryDays": 4,
        "locationName": "Worli, Mumbai"
    },
    {
        "pincode": "700020",
        "estimatedDeliveryDays": 3,
        "locationName": "Salt Lake City, Kolkata"
    },
    {
        "pincode": "600020",
        "estimatedDeliveryDays": 2,
        "locationName": "Anna Nagar, Chennai"
    },
    {
        "pincode": "500020",
        "estimatedDeliveryDays": 4,
        "locationName": "Banjara Hills, Hyderabad"
    }
]

const inputElement = document.getElementById("inputElement")
const result = document.getElementById("result")


// custom-element.js
class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        this.inputElement = this.querySelector("input")
        this.form = this.querySelector("form")
        this.form.addEventListener("submit", this.validatePin.bind(this))
        this.result = this.querySelector("div")
    }

    validatePin(event) {
        event.preventDefault();
        this.result.textContent = ""
        const inputValue = this.inputElement.value
        const getItem = data.filter((each) => each.pincode === inputValue);
        console.log(getItem)

        if ((getItem.length === 0) || (this.inputElement.length > 6) || (this.inputElement.length < 6)) {
            const date = document.createElement("p")
            date.innerHTML = `<p>Entere Valid Pincode</p>`
            this.result.appendChild(date)
            return
        }




        const {
            estimatedDeliveryDays
        } = getItem[0]
        const today = new Date()
        console.log(estimatedDeliveryDays)
        today.setDate(today.getDate() + estimatedDeliveryDays);
        console.log(today)
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        };
        const dateFormatter = new Intl.DateTimeFormat('en-US', options);

        // Format the date using the Intl.DateTimeFormat object
        const formattedDate = dateFormatter.format(today);

        // Extract the day, date, and month components
        const day = formattedDate.split(',')[0].trim();
        const dateAndMonth = formattedDate.split(',')[1].trim();
        const date = document.createElement("p")
        date.innerHTML = `<p>Estimated Delivery</p>
            <p>${day} ${dateAndMonth}</p>`
        this.result.appendChild(date)
    }
}

customElements.define('my-custom-element', MyCustomElement);