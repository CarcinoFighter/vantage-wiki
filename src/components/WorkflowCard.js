export default function WorkflowCard({ slotId, tags, title, desc, steps, hasVideo, videoSrc }) {
  return (
    <div className="workflow-card">
      <div className={`wf-video-slot ${hasVideo ? 'has-video' : ''}`} id={`slot-${slotId}`}>
        {!hasVideo && (
          <div className="upload-hint">
            <div className="upload-hint-icon" style={{background: tags?.[0]?.bg || 'rgba(152,117,193,0.1)'}}>🎬</div>
            <div className="upload-hint-text">
              <p>Video Placeholder</p>
              <span>No recording available yet</span>
            </div>
          </div>
        )}
        <video id={`vid-${slotId}`} src={videoSrc || `videos/${slotId}.mp4`} controls style={{display: hasVideo ? 'block' : 'none'}}></video>
      </div>
      
      <div className="wf-body">
        {tags && tags.length > 0 && (
          <div className="wf-tags">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="wf-tag" 
                style={{color: tag.color, borderColor: tag.borderColor, background: tag.bg}}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}
        <div className="wf-title">{title}</div>
        <div className="wf-desc">{desc}</div>
        
        {steps && steps.length > 0 && (
          <div className="wf-steps">
            <div className="wf-steps-label">{steps[0].label || 'Steps'}</div>
            {steps.map((step, i) => (
              <div className="wf-step" key={i}>
                <div 
                  className="wf-step-num" 
                  style={{background: step.bg || 'rgba(152,117,193,0.1)', color: step.color || 'var(--accent-light)'}}
                >
                  {step.num}
                </div>
                <div className="wf-step-text" dangerouslySetInnerHTML={{ __html: step.text }}></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
