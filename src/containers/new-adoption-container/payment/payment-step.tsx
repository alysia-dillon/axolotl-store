import React, { useState, ChangeEvent } from "react";
import { usePetContext } from "@deps/contexts/petContext";
import Link from "next/link";

interface PaymentOption {
  id: string;
  type: string; // e.g., 'Credit Card', 'Bank Transfer'
  details: string; // e.g., card number or bank account details
}

const PaymentStep = () => {
  const {
    setSelectedPaymentMethod,
    paymentOptions,
    addPaymentOption,
    goToNext,
    currentStepIndex,
    goToPrevious,
  } = usePetContext();

  // State for new payment method details
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState<
    string | null
  >(null);

  const handleSelectPaymentMethod = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethodId(event.target.value);
    const selectedOption = paymentOptions.find(
      (option) => option.id === event.target.value
    );
    if (selectedOption) {
      setSelectedPaymentMethod(selectedOption);
    }
  };

  const handleAddNewPayment = () => {
    if (
      cardNumber.trim() &&
      expirationMonth.trim() &&
      expirationYear.trim() &&
      cvv.trim() &&
      zipCode.trim()
    ) {
      const newOption: PaymentOption = {
        id: `new-${Date.now()}`, // Generate a unique ID
        type: "Credit Card", // Customize as needed
        details: `Card Number: ${cardNumber}, Expiry: ${expirationMonth}/${expirationYear}, CVV: ${cvv}, Zip: ${zipCode}`,
      };
      addPaymentOption(newOption);
      setSelectedPaymentMethod(newOption);
      // Clear fields after adding
      setCardNumber("");
      setExpirationMonth("");
      setExpirationYear("");
      setCvv("");
      setZipCode("");
    }
  };

  // Check if a payment method is selected
  const isPaymentMethodSelected = selectedPaymentMethodId !== null;

  return (
    <div>
      <h1>Payment Method</h1>
      <h2>
        {paymentOptions.length > 0 ? "Select or Enter" : "Enter"} A Payment
        Method
      </h2>
      {paymentOptions.length > 0 && (
        <div>
          <h3>Existing Payment Method(s)</h3>
          {paymentOptions.map((option) => (
            <div key={option.id}>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.id}
                  checked={selectedPaymentMethodId === option.id}
                  onChange={handleSelectPaymentMethod}
                />
                {option.type}: {option.details}
              </label>
            </div>
          ))}
        </div>
      )}
      <div>
        <h3>Add New Payment Method</h3>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Card Number"
          maxLength={16}
        />
        <input
          type="text"
          value={expirationMonth}
          onChange={(e) => setExpirationMonth(e.target.value)}
          placeholder="Expiration Month (MM)"
          maxLength={2}
        />
        <input
          type="text"
          value={expirationYear}
          onChange={(e) => setExpirationYear(e.target.value)}
          placeholder="Expiration Year (YYYY)"
          maxLength={4}
        />
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="CVV"
          maxLength={4}
        />
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Zip Code"
          maxLength={5}
        />
        <button
          onClick={handleAddNewPayment}
          className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
        >
          Add Payment Method
        </button>
      </div>
      <button
        onClick={goToNext}
        disabled={!isPaymentMethodSelected}
        className={`p-2 rounded mt-4 ${
          isPaymentMethodSelected
            ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
            : "border-2 border-gray-500 bg-gray-300 text-gray-700 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
      {currentStepIndex > 0 && <button onClick={goToPrevious}>Back</button>}
      <Link href="/available-pets">Cancel Adoption</Link>
    </div>
  );
};

export default PaymentStep;
