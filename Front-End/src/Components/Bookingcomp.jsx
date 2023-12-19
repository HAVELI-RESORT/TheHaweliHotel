import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
export default function Bookingcomp() {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div class="w-full h-full bg-yellow-100 bg-opacity-50">
            <div class="flex flex-col items-center justify-center w-full h-full gap-5 sm:flex-row mt-[60px] p-10">
                <div class="flex flex-row items-start justify-center w-full h-full">
                    <div class="flex flex-col items-center justify-start h-full">
                        <p class="m-10 text-4xl font-bold">ROOMS AVAILABILITY</p>
                        <div class="flex flex-col gap-8 sm:flex-row">
                            <div class="flex-grow p-2 bg-yellow-200 rounded-xl">
                                <h2 class="mb-2 text-lg font-bold">Current Month</h2>
                                <div class="grid grid-cols-7 gap-2">
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">01</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">02</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">03</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">04</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">05</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">06</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">07</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">08</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">09</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">10</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">11</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">12</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">13</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">14</div>
                                    <div
                                        class="cursor-pointer text-center p-2 rounded text-black  bg-red-500 ">
                                        15</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">16</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">17</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">18</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">19</div>
                                    <div
                                        class="cursor-pointer text-center p-2 rounded text-black  bg-red-500 ">
                                        20</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">21</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">22</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">23</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">24</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">25</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">26</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">27</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">28</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">29</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">30</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">31</div>
                                </div>
                            </div>
                            <div class="flex-grow p-2 bg-yellow-200 rounded-xl">
                                <h2 class="mb-2 text-lg font-bold">Next Month</h2>
                                <div class="grid grid-cols-7 gap-2">
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">01</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">02</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">03</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">04</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">05</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">06</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">07</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">08</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">09</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">10</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">11</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">12</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">13</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">14</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">15</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">16</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">17</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">18</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">19</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">20</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">21</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">22</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">23</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">24</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">25</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">26</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">27</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">28</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">29</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">30</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">31</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-center w-full h-full">
                    <form class="flex flex-col justify-center w-full h-full gap-3 p-10 bg-yellow-200">
                        <p class="m-2 text-3xl font-bold text-center">Book Your Visit</p>
                        <div class="flex flex-col items-center justify-center gap-2 sm:flex-row"><svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z">
                            </path>
                        </svg>
                            <div class="react-datepicker-wrapper">
                            <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy" 
                                    placeholderText="Select a date" // Customize the date format if needed
                                />
                                {/* <div class="react-datepicker__input-container"><input type="text"
                                    placeholder="Select start date" class="border-2 border-gray-200 rounded"
                                    value="" /></div> */}
                            </div><span class="mx-4 text-gray-500">to</span><svg
                                class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z">
                                </path>
                            </svg>
                            <div class="react-datepicker-wrapper">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy"  
                                    placeholderText="Select a date"// Customize the date format if needed
                                />
                                {/* <div class="react-datepicker__input-container"><input type="text"
                                    placeholder="Select end date" class="border-2 border-gray-200 rounded"
                                    value="" /></div> */}
                            </div>
                        </div><label for="bookingType">Booking Type:</label><select id="bookingType" name="bookingType"
                            class="border-2 border-gray-200 rounded" required="">
                            <option value="" disabled="" selected="">Select booking type</option>
                            <option value="SUIT">Suit</option>
                            <option value="ROOM">ROOM</option>
                        </select><label for="name">Name:</label><input type="text" id="name" placeholder="Name"
                            class="border-2 border-gray-200 rounded" required="" name="name" value="" /><label
                                for="email">Email:</label><input type="email" id="email" placeholder="Email"
                                    class="border-2 border-gray-200 rounded" required="" name="email" value="" /><label
                                        for="phoneNumber">Phone Number:</label><input type="tel" id="phoneNumber"
                                            placeholder="Phone Number" class="border-2 border-gray-200 rounded" required=""
                                            name="phoneNumber" value="" /><button type="button" class="p-2 text-xl font-bold rounded-xl mt-6 
            text-gray-200 bg-gray-400" disabled="">BOOK NOW</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
