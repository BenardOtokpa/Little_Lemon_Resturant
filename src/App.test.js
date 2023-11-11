import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage'; // Replace with the actual path to your reducer functions

// Test for the static text being rendered in the BookingForm component
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})

// Test the initializeTimes function
test('Initializes the times correctly', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual([]);
})

// Test the updateTimes function
test('Updates the times correctly', () => {
    const initialState = ['17:00', '18:00', '19:00']; 
    const updatedState = updateTimes(initialState); 
    expect(updatedState).toEqual(['17:00', '18:00', '19:00', '20:00']); 
})
