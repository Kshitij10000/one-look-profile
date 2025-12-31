import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Editor.css';

export default function Editor({ profile, onUpdate, onPublish }) {
    const navigate = useNavigate();

    const handlePublish = () => {
        onPublish(profile);
        navigate('/');
    };

    const handleChange = (section, field, value) => {
        onUpdate({
            ...profile,
            [section]: {
                ...profile[section],
                [field]: value
            }
        });
    };

    const handleNestedChange = (section, index, field, value, subField = null) => {
        const newSection = [...profile[section]];
        if (subField) {
            // Handle deeper nesting if needed, for now assuming flat array of objects
        } else {
            newSection[index] = { ...newSection[index], [field]: value };
        }
        onUpdate({ ...profile, [section]: newSection });
    };

    // Helper to handle skills specific structure
    const handleSkillChange = (categoryIndex, itemIndex, value) => {
        const newSkills = [...profile.skills];
        const newItems = [...newSkills[categoryIndex].items];
        newItems[itemIndex] = value;
        newSkills[categoryIndex] = { ...newSkills[categoryIndex], items: newItems };
        onUpdate({ ...profile, skills: newSkills });
    }

    return (
        <div className="editor-container">
            <div className="editor-header">
                <h2>Edit Profile</h2>
                <button className="publish-btn" onClick={handlePublish}>Publish to Discovery</button>
            </div>

            <div className="form-section">
                <h3>Personal Info</h3>
                <label>Full Name</label>
                <input
                    type="text"
                    value={profile.personalInfo.fullName}
                    onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)}
                />
                <label>Title</label>
                <input
                    type="text"
                    value={profile.personalInfo.title}
                    onChange={(e) => handleChange('personalInfo', 'title', e.target.value)}
                />
                <label>Summary</label>
                <textarea
                    value={profile.personalInfo.summary}
                    onChange={(e) => handleChange('personalInfo', 'summary', e.target.value)}
                />
                <div className="grid-2">
                    <div>
                        <label>Email</label>
                        <input value={profile.personalInfo.email} onChange={(e) => handleChange('personalInfo', 'email', e.target.value)} />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input value={profile.personalInfo.phone} onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)} />
                    </div>
                </div>
                <label>Location</label>
                <input value={profile.personalInfo.location} onChange={(e) => handleChange('personalInfo', 'location', e.target.value)} />
            </div>

            <div className="form-section">
                <h3>Experience</h3>
                {profile.experience.map((exp, index) => (
                    <div key={exp.id} className="card-item">
                        <input
                            placeholder="Role"
                            value={exp.role}
                            onChange={(e) => handleNestedChange('experience', index, 'role', e.target.value)}
                        />
                        <input
                            placeholder="Company"
                            value={exp.company}
                            onChange={(e) => handleNestedChange('experience', index, 'company', e.target.value)}
                        />
                        <input
                            placeholder="Duration"
                            value={exp.duration}
                            onChange={(e) => handleNestedChange('experience', index, 'duration', e.target.value)}
                        />
                        <textarea
                            placeholder="Description"
                            value={exp.description}
                            onChange={(e) => handleNestedChange('experience', index, 'description', e.target.value)}
                        />
                    </div>
                ))}
            </div>

            <div className="form-section">
                <h3>Projects</h3>
                {profile.projects.map((proj, index) => (
                    <div key={proj.id} className="card-item">
                        <input
                            placeholder="Project Name"
                            value={proj.name}
                            onChange={(e) => handleNestedChange('projects', index, 'name', e.target.value)}
                        />
                        <input
                            placeholder="Role"
                            value={proj.role}
                            onChange={(e) => handleNestedChange('projects', index, 'role', e.target.value)}
                        />
                        <textarea
                            placeholder="Description"
                            value={proj.description}
                            onChange={(e) => handleNestedChange('projects', index, 'description', e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
