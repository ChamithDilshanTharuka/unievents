import React, { useState, useCallback, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the default Quill styling
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const AdminEvents = () => {

    const [editorContent, setEditorContent] = useState(''); // State for ReactQuill content
    const [imageURL, setImageURL] = useState('');
    const[eventData, setEventData] = useState({
        name:'',
        category: '',
        startTime: '',
        endTime: '',
        location: '',
        fee: 0,
        capacity: 0,
        registrationLink: '',
        description: '',
        imageURL: '',
    });

    const handleInputChange = (e) => {
        setEventData({
            ...eventData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSaveEvent = async () => {
        try {
            const response = await axios.post('/components/events', eventData);
            if (response.status === 201) {
                alert('Event created successfully');
            }
        }
        catch (error) {
            console.error('Error saving event', error);
        }
    };

    // Function to handle editor content change
    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    // Function to handle file drop
    const onDrop = useCallback((acceptedFiles) => {
        // Handle files
        const file = acceptedFiles[0]; // Since we expect one file at a time
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);  // Update the image source to display
        }
    },[]);

    // Initialize Dropzone
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
    });


    return (
        <>
            <div className="page-title accent-background">
                <div className="container">
                    <h1>Event Details</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="#">Add Details</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section id="service-details" className="service-details section">

                <div className="container">

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <div className="portfolio-item isotope-item filter-app">
                                <img src={imageURL} className="img-fluid" alt="" />
                                <div className="portfolio-info services-list">

                                    {/* React Dropzone Area */}
                                    <div className="dropzone-area" {...getRootProps()}  style={dropzoneStyle}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <p>Drop the files here...</p>
                                        ) : (
                                            <p>Drag 'n' drop an image here, or click to select one</p>
                                        )}
                                         {imageURL && <img src={imageURL} alt="Uploaded preview" style={{ width: '100%', marginTop: '10px' }} />}
                                    </div>

                                    <h4>Event Name:</h4>
                                    <input type="text" id="name" value={eventData.name} onChange={handleInputChange} placeholder="Enter Event Name" />
                                    <h4>Registration Link</h4>
                                    <input type="url" id="registrationLink" value={eventData.registrationLink} onChange={handleInputChange} placeholder="Enter Registration Link" />

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="services-list">
                                <h4>Event Name:</h4>
                                <input type="text" id="ename" value={eventData.name} onChange={handleInputChange} placeholder="Enter Event Name" />

                                <h4>Event Category</h4>
                                <input type="text" id="category" value={eventData.category} onChange={handleInputChange} placeholder="Enter Event Category" />

                                <h4>Start Date and Time</h4>
                                <input type="datetime-local" id="start-time" value={eventData.startTime} onChange={handleInputChange}/>

                                <h4>End Date and Time</h4>
                                <input type="datetime-local" id="end-time" value={eventData.endTime} onChange={handleInputChange} />

                                <h4>Venue/Location</h4>
                                <input type="text" id="location" value={eventData.location} onChange={handleInputChange} placeholder="Enter Venue/Location" />

                                <h4>Ticket Fee</h4>
                                <input type="number" id="ticket-fee" value={eventData.fee} onChange={handleInputChange} placeholder="Enter Ticket Fee" min="0" />

                                <h4>Capacity</h4>
                                <input type="number" id="capacity" value={eventData.capacity} onChange={handleInputChange} placeholder="Enter Capacity" min="0" />

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-12 services-list" data-aos="fade-up" data-aos-delay="200">
                        <h4>Event Description</h4>

                        {/* ReactQuill Editor */}
                        <ReactQuill
                            theme="snow"
                            value={editorContent}
                            onChange={handleEditorChange}
                            placeholder="Enter Details"
                            modules={{
                                toolbar: [
                                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                    [{ size: [] }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link', 'image'],
                                    ['clean']  // Clears formatting
                                ],
                            }}
                        />
                    </div>
                </div>

            </section>
        </>
    )
}
const dropzoneStyle = {
    border: '2px dashed #007bff',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer'
};

export default AdminEvents;