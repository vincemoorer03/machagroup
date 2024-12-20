import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './FormQuestions.css';  // Ensure this is linked to your universal CSS

function ConflictResolutionFormPage() {
  const navigate = useNavigate();  // Initialize useNavigate hook for navigation

  // Function to handle back button
  const handleBack = () => {
    navigate(-1);  // Navigates to the previous page
  };

  return (
    <div className="form-page">
      <header className="header">
         {/* Back Button */}
      <button className="back-button" onClick={handleBack}>←</button> {/* Back button at the top */}
        <h1>Conflict Resolution Assessment</h1>
      </header>
      
      <main className="form-container">
        <form>
          {/* 2.1.1.1 Training and Skills */}
          <h2>Training and Skills:</h2>
          <div className="form-section">
            <label>Are security personnel trained in conflict resolution techniques, including de-escalation strategies?</label>
            <div>
              <input type="radio" name="gates-operational" value="yes" /> Yes
              <input type="radio" name="gates-operational" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Have they received specialized training to handle diverse conflict scenarios effectively?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Do security personnel possess the necessary communication and interpersonal skills to manage conflicts professionally and calmly?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <h2>Recognition and Assessment:</h2>
          <div className="form-section">
            <label>Are security personnel trained to recognize early signs of potential conflicts or escalating situations?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Do they assess the nature and severity of conflicts quickly and accurately?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are there protocols in place for security personnel to determine appropriate responses based on the level of conflict and potential risks involved?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No 
            </div>
            <div>
              <input type="text" name="access-rights" placeholder="Describe the protocols" />  
            </div>
          </div>

          <h2>De-escalation Techniques:</h2>
          <div className="form-section">
            <label>Do security personnel employ de-escalation techniques to defuse tensions and reduce the intensity of conflicts?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are they trained to remain calm and composed while interacting with individuals involved in conflicts?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Do security personnel use active listening, empathy, and effective communication to address underlying issues and resolve conflicts peacefully?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <h2>Physical Restraint and Intervention:</h2>
          <div className="form-section">
            <label>Are security personnel trained in safe and effective physical restraint techniques, if necessary?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Do they use physical intervention as a last resort, only when other de-escalation strategies have been exhausted?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are there protocols in place to ensure that physical intervention is performed in a manner that minimizes the risk of injury to all parties involved?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No  
            </div>
            <div>
              <input type="text" name="auth-mechanisms" placeholder="Describe the protocols" />  
            </div>
          </div>

          <h2>Teamwork and Collaboration:</h2>
          <div className="form-section">
            <label>Are security personnel trained to work collaboratively with colleagues, emergency responders, and other stakeholders during crisis situations?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Do they coordinate their efforts effectively to manage conflicts and ensure the safety of individuals and property?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Is there clear communication and coordination between security personnel and other teams involved in emergency response?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <h2>Documentation and Reporting:</h2>
          <div className="form-section">
            <label>Are incidents involving conflict resolution documented accurately and promptly?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Is there a standardized reporting process for documenting details of conflicts, interventions, and outcomes?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
            <div>
              <input type="text" name="auth-mechanisms" placeholder="Describe the reporting process" />  
            </div>
          </div>

          <div className="form-section">
            <label>Are reports reviewed regularly to identify trends, areas for improvement, and opportunities for further training or intervention?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <h2>Continuous Improvement:</h2>
          <div className="form-section">
            <label>Is there ongoing training and development for security personnel to enhance their conflict resolution skills?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are debriefings conducted after incidents to evaluate responses, identify lessons learned, and implement corrective actions?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Is feedback from security personnel and stakeholders used to improve conflict resolution strategies and procedures over time?</label>
            <div>
              <input type="radio" name="gates-smooth" value="yes" /> Yes
              <input type="radio" name="gates-smooth" value="no" /> No
            </div>
          </div>

        </form>
      </main>
    </div>
  )
}

export default ConflictResolutionFormPage;