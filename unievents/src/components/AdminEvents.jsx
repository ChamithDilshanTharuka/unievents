import React, { useState, useCallback, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the default Quill styling
import { useDropzone } from 'react-dropzone';

const AdminEvents = () => {

    const [editorContent, setEditorContent] = useState(''); // State for ReactQuill content
    const [imageURL, setImageURL] = useState('');

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
    },);

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
                                    <div {...getRootProps()} className="dropzone-area" style={dropzoneStyle}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <p>Drop the files here...</p>
                                        ) : (
                                            <p>Drag 'n' drop an image here, or click to select one</p>
                                        )}
                                    </div>

                                    <h4>Event Name:</h4>
                                    <input type="text" id="ename" placeholder="Enter Event Name" />
                                    <h4>Registration Link</h4>
                                    <input type="url" id="reg-link" placeholder="Enter Registration Link" />

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="services-list">
                                <h4>Event Name:</h4>
                                <input type="text" id="ename" placeholder="Enter Event Name" />

                                <h4>Event Category</h4>
                                <input type="text" id="category" placeholder="Enter Event Category" />

                                <h4>Start Date and Time</h4>
                                <input type="datetime-local" id="start-time" />

                                <h4>End Date and Time</h4>
                                <input type="datetime-local" id="end-time" />

                                <h4>Venue/Location</h4>
                                <input type="text" id="location" placeholder="Enter Venue/Location" />

                                <h4>Ticket Fee</h4>
                                <input type="number" id="ticket-fee" placeholder="Enter Ticket Fee" min="0" />

                                <h4>Capacity</h4>
                                <input type="number" id="capacity" placeholder="Enter Capacity" min="0" />

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