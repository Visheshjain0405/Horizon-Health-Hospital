import React from 'react'
import Navbar from '../Common/Navbar'
import { GiKidneys } from "react-icons/gi";
import { FaBone, FaHeartPulse } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { FaRibbon } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaXRay } from "react-icons/fa";
import { GiScalpel } from "react-icons/gi";
import { TbBoneFilled } from "react-icons/tb";
import { IoIosBody } from "react-icons/io";
import { FaStethoscope } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { FaVial } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaUserMd, FaHospital, FaStar, FaLaptop, FaAmbulance, FaHeart } from 'react-icons/fa';
import Footer from '../Common/Footer';
import Aos from 'aos';
function Home() {
    Aos.init({});
    const departments = [
        { name: 'Cardiology', icon: FaHeartPulse },
        { name: 'Neurology', icon: FaBrain },
        { name: 'Pediatrics', icon: FaBaby },
        { name: 'Obstetrics and Gynecology', icon: FaFemale },
        { name: 'Oncology', icon: FaRibbon },
        { name: 'Radiology', icon: FaXRay },
        { name: 'Pathology', icon: FaVial },
        { name: 'General Surgery', icon: GiScalpel },
        { name: 'Urology', icon: GiKidneys },
        { name: 'Gastroenterology', icon: FaStethoscope },
        { name: 'Dermatology', icon: IoIosBody },
        { name: 'Orthopedics', icon: TbBoneFilled },
    ];

    const doctors = [
        {
            id: 1,
            name: 'Dr. John Doe',
            department: 'Cardiology',
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg'
        },
        {
            id: 2,
            name: 'Dr. Jane Smith',
            department: 'Neurology',
            imageUrl: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg'
        },
        {
            id: 3,
            name: 'Dr. Emily Davis',
            department: 'Pediatrics',
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg'
        },
        {
            id: 4,
            name: 'Dr. Michael Brown',
            department: 'Orthopedics',
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg'
        },
        {
            id: 5,
            name: 'Dr. Sarah Wilson',
            department: 'Dermatology',
            imageUrl: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg='
        },
        {
            id: 6,
            name: 'Dr. David Lee',
            department: 'Gastroenterology',
            imageUrl: 'https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg'
        },
        {
            id: 7,
            name: 'Dr. Laura Martinez',
            department: 'Oncology',
            imageUrl: 'https://media.istockphoto.com/id/1473337533/photo/cheerful-friendly-female-doctor-holding-hands-in-pockets-of-uniform-stock-photo.jpg?s=2048x2048&w=is&k=20&c=9DKtBGAipN54SPI7jCsaU9vRGaVo3TxJaR9nREw94Ko='
        },
        {
            id: 8,
            name: 'Dr. James Taylor',
            department: 'Urology',
            imageUrl: 'https://media.istockphoto.com/id/1255239894/photo/confident-female-nurse-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=UGldjhl8Ho-feX85gk-G0LbsVcqbQn17Y1aAEmrN-TM='
        },
        {
            id: 9,
            name: 'Dr. Linda Harris',
            department: 'Gynecology',
            imageUrl: 'https://media.istockphoto.com/id/1367507209/photo/portrait-of-indian-female-doctor-stock-photo.jpg?s=2048x2048&w=is&k=20&c=2pWNhHrCO--osTC9IuS9Pv6Ba7DiQVcZMdyqgHpdni4='
        },
        {
            id: 10,
            name: 'Dr. Kevin Johnson',
            department: 'Nephrology',
            imageUrl: 'https://media.istockphoto.com/id/1742056601/photo/photo-of-doctor-lady-smile-looking-at-camera-wear-stethoscope-white-uniform-isolate-white.jpg?s=2048x2048&w=is&k=20&c=dDaGW4Sl1slakuI5PDhcxMSsoC88TrDVpZ58JuXVfLA='
        },
        {
            id: 11,
            name: 'Dr. Angela Clark',
            department: 'Ophthalmology',
            imageUrl: 'https://c0.wallpaperflare.com/preview/233/551/663/business-office-medical-professional.jpg'
        },
        {
            id: 12,
            name: 'Dr. Charles Thompson',
            department: 'Rheumatology',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/03/00/22/02/1000_F_300220248_VKEd3QKx31kzqHcwZfnGmWKZLYTjf8R0.jpg'
        }
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Navbar />


            <section className="relative bg-black h-[60vh] sm:h-[75vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://res.cloudinary.com/djh2ro9tm/image/upload/v1725352873/vfqj27mso4hfuwoccuyo.png')" }}
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 p-4 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-white text-4xl font-bold mb-4">
                        YOUR MOST TRUSTED HEALTH PARTNER FOR LIFE.
                    </h1>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Book Appointment
                    </button>
                </div>
            </section>
            <section className=' py-12 bg-gray-100' data-aos="fade-up">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                    <div className='w-full flex flex-col items-center justify-center border-2 border-white bg-white p-4 rounded-lg shadow-lg'>
                        <h2 className='text-4xl font-bold text-blue-500 mb-2' >20+</h2>
                        <p className='text-lg font-medium'>Years Experience</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-2 border-white bg-white p-4 rounded-lg shadow-lg'>
                        <h2 className='text-4xl font-bold text-blue-500 mb-2'>2500+</h2>
                        <p className='text-lg font-medium'>Beds Facilitated Available</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-2 border-white bg-white p-4 rounded-lg shadow-lg'>
                        <h2 className='text-4xl font-bold text-blue-500 mb-2'>550+</h2>
                        <p className='text-lg font-medium'>Doctors and Staff</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-2 border-white bg-white p-4 rounded-lg shadow-lg'>
                        <h2 className='text-4xl font-bold text-blue-500 mb-2'>250+</h2>
                        <p className='text-lg font-medium'>Academic Papers</p>
                    </div>
                </div>
            </section>
            <section className='py-12 bg-gray-100'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8'>DEPARTMENTS</h1>
                <p className='text-sm sm:text-base md:text-lg text-center mb-8 sm:mb-12 px-4 sm:px-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptate? Laboriosam voluptatibus
                    <br /> minima consequuntur at inventore aut veritatis temporibus. Harum quidem ab voluptatem voluptatum rerum!
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4 sm:px-6' data-aos="fade-right">
                    {departments.map((dept, index) => (
                        <div key={index} className='bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
                            <dept.icon className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-blue-500" />
                            <h3 className='text-base sm:text-lg md:text-xl font-bold mb-2'>{dept.name}</h3>
                        </div>
                    ))}
                </div>
            </section>



            {/* <section className="relative h-[80vh] flex -mt-[50px]">
          
                <div className="w-1/2 bg-cover object-top" style={{ backgroundImage: "url('https://res.cloudinary.com/djh2ro9tm/image/upload/v1725352379/tqs4p1neepd0cjhyjiqj.png')" }}>
           
                </div>

           
                <div className="w-1/2 flex items-center justify-center p-8">
                    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
                        <form>
                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="Enter your first name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Enter your last name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                        Date of Appointment
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                                        Choose Department
                                    </label>
                                    <select
                                        id="department"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option>Cardiology</option>
                                        <option>Orthopedics</option>
                                        <option>Neurology</option>
                                        <option>General Medicine</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section> */}
            <section className="relative h-auto md:h-[80vh] flex flex-col md:flex-row -mt-[50px]">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-cover object-top" data-aos="fade-right" style={{ backgroundImage: "url('https://res.cloudinary.com/djh2ro9tm/image/upload/v1725352379/tqs4p1neepd0cjhyjiqj.png')" }}>
                    {/* Image section with full height and background image */}
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8" data-aos="fade-left">
                    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
                        <form>
                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="Enter your first name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Enter your last name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                        Date of Appointment
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                                        Choose Department
                                    </label>
                                    <select
                                        id="department"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option>Cardiology</option>
                                        <option>Orthopedics</option>
                                        <option>Neurology</option>
                                        <option>General Medicine</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>


            <section className='py-12 bg-gray-100'>
                <h1 className='text-4xl font-bold text-center mb-8'>MEET OUR DOCTORS</h1>
                <div className="w-full" data-aos="fade-up">
                    <Carousel responsive={responsive}>
                        {doctors.map(doctor => (
                            <div
                                key={doctor.id}
                                className='h-[500px] w-[400px] p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300'
                                style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                            >
                                <img
                                    src={doctor.imageUrl}
                                    alt={doctor.name}
                                    className='w-full h-80 object-cover mb-4 rounded-md shadow-md'
                                />
                                <h2 className='text-xl font-bold text-gray-800'>{doctor.name}</h2>
                                <p className='text-gray-600'>{doctor.department}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            <section id="features" className="container space-y-6 bg-gray-50 py-12 mx-auto md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl" data-aos="fade-up">Hospital Features</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Explore the exceptional features of our hospital that ensure top-notch healthcare services.
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3" data-aos="fade-right">
                    {/* Best Doctors Card */}
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow-lg">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <FaUserMd className="text-4xl text-blue-500 mb-4" />
                            <div className="space-y-2">
                                <h3 className="font-bold text-xl">Best Doctors</h3>
                                <p className="text-sm text-gray-600">
                                    Our team includes some of the best doctors in the field, offering expert care and treatment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Number 1 Hospital Card */}
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow-lg">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <FaHospital className="text-4xl text-green-500 mb-4" />
                            <div className="space-y-2">
                                <h3 className="font-bold text-xl">Number 1 Hospital</h3>
                                <p className="text-sm text-gray-600">
                                    Ranked as the top hospital in the region for quality and patient satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cutting-edge Technology Card */}
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow-lg">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <FaLaptop className="text-4xl text-purple-500 mb-4" />
                            <div className="space-y-2">
                                <h3 className="font-bold text-xl">Cutting-edge Technology</h3>
                                <p className="text-sm text-gray-600">
                                    Equipped with the latest technology for accurate diagnostics and effective treatments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Award-winning Care Card */}
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow-lg">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <FaStar className="text-4xl text-yellow-500 mb-4" />
                            <div className="space-y-2">
                                <h3 className="font-bold text-xl">Award-winning Care</h3>
                                <p className="text-sm text-gray-600">
                                    Recognized for outstanding patient care and excellence in healthcare services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Services Card */}
                    <div className="relative overflow-hidden rounded-lg border bg-cover bg-center p-2 shadow-lg">
                        <div className="flex h-[180px] flex-col justify-between rounded-md bg-opacity-50 p-6">
                            <FaAmbulance className="text-4xl text-red-500 mb-4" />
                            <div className="space-y-2 text-black">
                                <h3 className="font-bold text-xl text-gray-600">Emergency Services</h3>
                                <p className="text-sm">
                                    Available 24/7 to provide immediate care during emergencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Patient Satisfaction Card */}
                    <div className="relative overflow-hidden rounded-lg border bg-cover bg-center p-2 shadow-lg" >
                        <div className="flex h-[180px] flex-col justify-between rounded-md  bg-opacity-50 p-6">
                            <FaHeart className="text-4xl text-pink-500 mb-4" />
                            <div className="space-y-2 text-black">
                                <h3 className="font-bold text-xl text-gray-600">Patient Satisfaction</h3>
                                <p className="text-sm">
                                    Committed to ensuring the highest levels of patient satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Facilities Card */}

                </div>
            </section>

            <section className='h-[75vh] bg-black relative flex items-center justify-center' style={{ background: "url('https://static.vecteezy.com/system/resources/previews/030/601/987/large_2x/ambulance-on-the-way-ai-generative-free-photo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Overlay to improve text readability */}
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>

                <div className='relative z-10 text-center text-white px-6' data-aos="fade-up">
                    <h1 className='text-5xl font-bold mb-4'>
                        Emergency Number
                    </h1>
                    <h2 className='lg:text-6xl text-2xl font-extrabold mb-6'>
                        +91 - 2342342344
                    </h2>
                    <p className='text-xl'>
                        We provide 24/7 customer support. Feel free to contact us for any emergency cases.
                    </p>
                </div>
            </section>

            <section className='py-16 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <h1 className='text-4xl font-bold text-center mb-12' data-aos="fade-right">Recent Blog Posts</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' data-aos="fade-up">
                        {/* Blog Card 1 */}
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                            <img
                                src='https://media.licdn.com/dms/image/C4D12AQHUpI67EaaVjg/article-cover_image-shrink_720_1280/0/1652172770758?e=2147483647&v=beta&t=AqxgUj5fbwrtgiWQOKAMG08iaU0hS1LxC9-_mdf0kvY'
                                alt='Blog 1'
                                className='w-full h-48 object-cover rounded-md mb-4'
                            />
                            <h2 className='text-2xl font-semibold mb-2'>11 Ideas to get your healtcare blog</h2>
                            <p className='text-gray-600 mb-4'>
                                This is a short summary of the first blog post. It gives a brief overview of the content and entices readers to click through for more.
                            </p>
                            <a
                                href='#'
                                className='text-blue-500 hover:text-blue-700 font-medium'
                            >
                                Read More
                            </a>
                        </div>

                        {/* Blog Card 2 */}
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                            <img
                                src='https://fullscript.com/wp-content/uploads/2022/11/should-doctors-blog.png'
                                alt='Blog 2'
                                className='w-full h-48 object-cover rounded-md mb-4'
                            />
                            <h2 className='text-2xl font-semibold mb-2'>Daily Tips to be healty !</h2>
                            <p className='text-gray-600 mb-4'>
                                This is a short summary of the second blog post. It highlights the key points of the article and encourages readers to learn more.
                            </p>
                            <a
                                href='#'
                                className='text-blue-500 hover:text-blue-700 font-medium'
                            >
                                Read More
                            </a>
                        </div>

                        {/* Blog Card 3 */}
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                            <img
                                src='https://blog.practo.com/wp-content/uploads/2024/06/Doctors-Day-Blog-banner-900x500.png'
                                alt='Blog 3'
                                className='w-full h-48 object-cover rounded-md mb-4'
                            />
                            <h2 className='text-2xl font-semibold mb-2'>Celebrating Doctor's Digital Evolution</h2>
                            <p className='text-gray-600 mb-4'>
                                This is a short summary of the third blog post. It provides an insight into the blog content and invites readers to explore further.
                            </p>
                            <a
                                href='#'
                                className='text-blue-500 hover:text-blue-700 font-medium'
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home