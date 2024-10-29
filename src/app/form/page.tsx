'use client'
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { users } from './api/data';

const interestCats = ['O-1', 'EB-1A', 'EB-2 NIW', 'I do not know'];

type FormData = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    url: string;
    categories: Array<string>;
    comment: string;
};

const Form = () => {
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const handleCheckboxChange = (e:any) => {
    const optionValue = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
    }
  };

    const handleChange = (e:any) => {
        switch (e.target.id){
            case 'firstname':
                return setFirstname(e.target.value);
            case 'lastname':
                return setLastname(e.target.value);
            case 'email':
                return setEmail(e.target.value);
            case 'comment':
                return setComment(e.target.value);
            case 'url':
                return setUrl(e.target.value);
            default:
                return [];
        }
    }

    const handleCountry = (e:any) => {
        setCountry(e.target.value)
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        try {
            const data:FormData = {
                id: users.length + 1,
                firstname,
                lastname,
                email,
                country,
                url,
                categories: selectedOptions,
                comment,
            }
            console.log(data);
            const response = await fetch('/form/api', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
      
            if (response.ok) {
              // Handle successful submission
              console.log('Data submitted successfully');
            } else {
              // Handle errors
              console.error('Error submitting data');
            }
          } catch (error) {
            console.error('Error submitting data:', error);
        }
        
        if (firstname && lastname && email) {
            redirect('/thankyou');
        }
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center bg-[#D5D9A0] w-screen">
            <div className="flex flex-col items-center justify-center bg-white">
                <div className={`flex justify-center items-center bg-[url('/alma-header.png')] w-[830px] h-[318px] bg-no-repeat bg-cover bg-center`} />
                <div className="flex flex-col items-center justify-center dark:bg-white mx-5 p-10 w-1/2">
                    <p className={styles.headerText}>Want to understand your visa options?</p>
                    <p className="text-slate-800 text-center">Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.</p>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <form className="w-80" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <input type="text" id="firstname" className={styles.input} placeholder="First Name" value={firstname || ''} onChange={handleChange} required />
                            </div>
                            <div className="mb-5">
                                <input type="text" id="lastname" className={styles.input} placeholder="Last Name" value={lastname || ''} onChange={handleChange}  required />
                            </div>
                            <div className="mb-5">
                                <input type="email" id="email" className={styles.input} placeholder="Email" value={email || ''} onChange={handleChange} required />
                            </div>
                            <div className="mb-5">
                                <select id="country" onChange={(handleCountry)} className={styles.input} value={country}>
                                <option value="" disabled>Country of Citizenship</option>
                                    <option value="Canada">Canada</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>

                            <div className="mb-5">
                                <input type="text" id="url" className={styles.input} placeholder="LinkedIn/Personal Website URL" onChange={handleChange} required />
                            </div>

                            <div className="flex flex-col mb-5">
                                <p className={styles.headerText}>Visa categories of interest?</p>
                                {interestCats.map((cat) => {
                                    return (
                                        <div key={cat} className="flex mb-3">
                                            <input id={cat} type="checkbox" value={cat} className={styles.checkbox} onChange={handleCheckboxChange} checked={selectedOptions.includes(cat)} />
                                        
                                            <label className="inline ms-2 text-sm font-medium text-gray-900">{cat}</label>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-col">
                                <p className={styles.headerText}>How can we help you?</p>
                            </div>
                            <div className="flex flex-col mb-5">
                                <textarea id="comment" rows={4} className={styles.input} onChange={handleChange} placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className={styles.button}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Form;

export const styles = {
    input: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-slate-300 dark:placeholder-gray-400 text-slate-600 dark:focus:ring-blue-500 dark:focus:border-blue-500",
    checkbox: "inline w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800",
    button: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    headerText: "text-slate-800 text-xl font-bold text-center mb-3"
}