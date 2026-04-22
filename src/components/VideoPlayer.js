'use client';

import { useEffect, useRef, useState } from 'react';

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  const m = Math.floor(whole / 60);
  const s = whole % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function VideoPlayer({ src, id, className }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    const onTime = () => {
      if (!isSeeking) setCurrentTime(Number.isFinite(video.currentTime) ? video.currentTime : 0);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    video.controls = false;
    video.removeAttribute('controls');
    video.playsInline = true;
    if (!video.getAttribute('preload')) video.setAttribute('preload', 'metadata');

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);

    onLoaded();
    onTime();
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
    };
  }, [isSeeking]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (video.paused) await video.play();
      else video.pause();
    } catch {
      // Browser gesture restrictions: ignore.
    }
  };

  const onScrubInput = (e) => {
    setIsSeeking(true);
    setCurrentTime(Number(e.target.value));
  };

  const onScrubChange = (e) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Number(e.target.value);
    setIsSeeking(false);
  };

  const toggleFullscreen = async () => {
    const video = videoRef.current;
    if (!video) return;
    const target = video.closest('.wf-video-slot') || video;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }
      if (target.requestFullscreen) await target.requestFullscreen();
    } catch {
      // Best-effort.
    }
  };

  return (
    <div className={className}>
      <video ref={videoRef} id={id} src={src} />
      <div className="vp-controls">
        <button type="button" className="vp-btn" onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <span className="vp-time">{formatTime(currentTime)}</span>
        <input
          className="vp-scrub"
          type="range"
          min="0"
          max={duration || 0}
          step="0.01"
          value={Math.min(currentTime, duration || 0)}
          disabled={!duration}
          onInput={onScrubInput}
          onChange={onScrubChange}
        />
        <span className="vp-time vp-time-dur">{duration ? formatTime(duration) : '0:00'}</span>
        <button type="button" className="vp-btn vp-btn-ghost" onClick={toggleFullscreen}>
          Full
        </button>
      </div>
    </div>
  );
}

