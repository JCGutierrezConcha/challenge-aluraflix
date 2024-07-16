import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const VideoContext = React.createContext();

export const useVideoContext = () => {
    return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/JCGutierrezConcha/data-aluraflix/videos');
            setVideos(response.data);
            console.log('Videos fetched:', response.data); //
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const updateVideo = async (editedVideo) => {
        try {
            const response = await axios.put(`https://my-json-server.typicode.com/JCGutierrezConcha/data-aluraflix/videos/${editedVideo.id}`, editedVideo);
            console.log('Video actualizado:', response.data);

            setVideos(prevVideos => {
                return prevVideos.map(video => {
                    if (video.id === editedVideo.id) {
                        return editedVideo;
                    }
                    return video;
                });
            });

            closeModal();
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    const addVideo = async (newVideo) => {
        try {
            const response = await axios.post('https://my-json-server.typicode.com/JCGutierrezConcha/data-aluraflix/videos', newVideo);
            console.log('Nuevo video agregado:', response.data);

            setVideos(prevVideos => [...prevVideos, response.data]);
            console.log('Updated video list:', response.data);
        } catch (error) {
            console.error('Error adding video:', error);
        }
    };

    const deleteVideo = async (videoId) => {
        try {
            await axios.delete(`https://my-json-server.typicode.com/JCGutierrezConcha/data-aluraflix/videos/${videoId}`);
            setVideos(prevVideos => prevVideos.filter(video => video.id !== videoId));
        } catch (error) {
            console.error('Error eliminando video:', error);
        }
    };

    const openModal = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };

    const videoContextValue = {
        videos,
        getVideos,
        updateVideo,
        addVideo,
        deleteVideo,
        isModalOpen,
        openModal,
        closeModal,
        selectedVideo,
    };

    return (
        <VideoContext.Provider value={videoContextValue}>
            {children}
        </VideoContext.Provider>
    );
};
