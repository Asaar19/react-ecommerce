const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("en-PK", {
        style:"currency",
        currency: "PKR",
        minimumFractionDigits: 2,

    }).format(price / 100);
};

export default FormatPrice;
