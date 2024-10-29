import Link from "next/link";

const ThankYou = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white text-slate-900 px-40 py-10 text-center">
            <p className="text-slate-800 text-xl font-bold text-center mb-3">Thank You</p>
            <p>Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai</p>
            <Link className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center  dark:focus:ring-blue-800 mt-5" href='/form'>Go Back to Homepage</Link>
        </div>
    )
};

export default ThankYou;