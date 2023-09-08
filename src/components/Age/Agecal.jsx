import "./AgeCal.css"
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function AgeCal() {
    const [startDate, setStartDate] = React.useState(dayjs(null));
    const [endDate, setEndDate] = React.useState(dayjs());
    const [age, setAge] = React.useState({ years: 0, months: 0, days: 0 });

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const calculateAge = (startDate, endDate) => {
        const years = endDate.diff(startDate, 'year');
        startDate = startDate.add(years, 'year');
        const months = endDate.diff(startDate, 'month');
        startDate = startDate.add(months, 'month');
        const days = endDate.diff(startDate, 'day');

        return { years, months, days };
    };

    const handleCalculateAge = () => {
        const calculatedAge = calculateAge(startDate, endDate);
        setAge(calculatedAge);
    };

    return (
        <>
            {/* <div className="main-div">
                <div className="main-div-1">
                    <div className="img-h1">
                        <img height="100" width="100" className="img-age" src="https://cdn-icons-png.flaticon.com/128/10440/10440341.png" alt="Image 4" />
                        <h1>AGE CALCULATOR</h1>
                    </div>
                    <p>Our Age Calculator Tool is designed to be user-friendly and accessible to everyone, offering a quick and straightforward way to find out how many years, months, days, or even seconds have passed since a specific date of birth. </p>
                    <div className="share-box">
                        <h2>Share</h2>
                        <div className="share">

                            <img className="share-x" src="https://cdn-icons-png.flaticon.com/128/2626/2626269.png" />
                            <img className="share-x" src="https://cdn-icons-png.flaticon.com/128/2626/2626270.png" />
                            <img className="share-x" src="https://cdn-icons-png.flaticon.com/128/2626/2626271.png" />
                            <img className="share-x" src="https://cdn-icons-png.flaticon.com/128/2626/2626279.png" />
                        </div>
                    </div>
                </div>

                <div className="main-div-2">

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <div>
                                <label>Start Date:</label>
                                <DatePicker
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                    views={['year', 'month', 'day']}
                                />
                            </div>
                            <div>
                                <label>End Date:</label>
                                <DatePicker
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                    views={['year', 'month', 'day']}
                                />
                            </div>
                            <div>
                                <button onClick={handleCalculateAge}>Calculate Age</button>
                            </div>
                             <div>
                    {age !== null && (
                        <p>
                            Age between selected dates:
                            {age.years} years,
                            {age.months} months,
                            {age.days} days
                        </p>

                    )}
                </div> 
                            <p>{age.years}</p>
                            <p>{age.months}</p>
                            <p>{age.days}</p>

                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div> */}
            <div className="main-age-div">
                <div className="main-age-container">
                    <div className="age-head">
                        <img height="100" width="100" className="img-age" src="https://cdn-icons-png.flaticon.com/128/10440/10440341.png" alt="Image 4" />
                        <h1>AGE CALCULATOR</h1>
                    </div>
                    <hr />
                    <div className="age-head-2">

                        {/* <p>Our Age Calculator Tool is designed to be user-friendly and accessible to everyone, offering a quick and straightforward way to find out how many years, months, days have passed since a specific date of birth. </p> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker']}>
                                <div className="internal-age">
                                    <div className="internal-age-1">
                                        <p className="select-p">Select Birth Date<img className="down-arrow" src="https://cdn-icons-png.flaticon.com/128/556/556721.png" /></p>
                                        <DatePicker
                                            value={startDate}
                                            onChange={handleStartDateChange}
                                            views={['year', 'month', 'day']}
                                            sx={{
                                                width: 295,
                                            }}
                                        />
                                    </div>
                                    <div className="internal-age-2">
                                        <p className="select-p-1">Select Current Date<img className="down-arrow" src="https://cdn-icons-png.flaticon.com/128/556/556721.png" /></p>
                                        <DatePicker
                                            value={endDate}
                                            onChange={handleEndDateChange}
                                            views={['year', 'month', 'day']}
                                            sx={{
                                                width: 295,
                                            }}
                                        />
                                    </div>
                                    <div className="age-btn">
                                        <button className="age-btn btn-age" onClick={handleCalculateAge}>Calculate Age
                                            <img className="age-btn-arrow" src="https://cdn-icons-png.flaticon.com/128/3148/3148414.png" /></button>

                                    </div>
                                    <div className="result">
                                        {/* {age !== null && (
                                            <p>
                                                Age between selected dates:
                                                {age.years} years,
                                                {age.months} months,
                                                {age.days} days
                                            </p>

                                        )} */}
                                        <p>YEAR {age.years}</p>
                                        <p>MONTHS {age.months}</p>
                                        <p>DAYS {age.days}</p>

                                    </div>


                                </div>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                </div>
            </div>
        </>
    );

}
