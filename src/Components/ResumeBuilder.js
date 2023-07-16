import React, { useState } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';

const ResumeBuilder = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [workExperience, setWorkExperience] = useState('');

    

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEducationChange = (e) => {
        setEducation(e.target.value);
    };

    const handleWorkExperienceChange = (e) => {
        setWorkExperience(e.target.value);
    };

    const handleGeneratePDF = () => {
        html2canvas(document.querySelector('#resume')).then((canvas) => {
            const imageData = canvas.toDataURL('image/png');

            const pdfDoc = (
                <Document>
                    <Page size="A4">
                        <View style={styles.resume}>
                            <Text>{name}</Text>
                            <Text>{email}</Text>
                            <Text>{education}</Text>
                            <Text>{workExperience}</Text>
                        </View>
                    </Page>
                </Document>
            );

            const blob = new Blob([pdfDoc], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            window.open(url);
        });
    };

    const styles = StyleSheet.create({
        resume: {
            padding: '10px',
            fontFamily: 'Arial, sans-serif',
          },
    });

    return (
        <div className="container">
            <h1 className="heading">Resume Builder</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="education">Education:</label>
                    <textarea id="education" value={education} onChange={handleEducationChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="workExperience">Work Experience:</label>
                    <textarea id="workExperience" value={workExperience} onChange={handleWorkExperienceChange} />
                </div>
            </form>

            <div id="resume" className="resume-preview">
                <h2>Resume Preview</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <h3>Education:</h3>
                <p>{education}</p>
                <h3>Work Experience:</h3>
                <p>{workExperience}</p>
            </div>

            <button className="generate-btn" type="button" onClick={handleGeneratePDF}>
                Generate Resume
            </button>
        </div>
    );
};

export default ResumeBuilder;
