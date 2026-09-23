/**
 * Auto-generated Media Assets from Pexels API
 * Project: mcp-agent-platform
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "7709298",
    "url": "https://images.pexels.com/photos/7709298/pexels-photo-7709298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Call center agents working on laptops in a modern office setup.",
    "avg_color": "#857B71"
},
  editorialPhotos: [
    {
    "id": "7709171",
    "url": "https://images.pexels.com/photos/7709171/pexels-photo-7709171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Call center agent wearing headphones working on a laptop in a modern office setting.",
    "avg_color": "#AA9E9A"
},
    {
    "id": "6009286",
    "url": "https://images.pexels.com/photos/6009286/pexels-photo-6009286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Empty modern subway platform with sleek design and digital signage at night.",
    "avg_color": "#2E4246"
},
    {
    "id": "35356785",
    "url": "https://images.pexels.com/photos/35356785/pexels-photo-35356785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A cinematic capture of the Bangalore Metro at a station platform, showcasing sleek, modern transportation.",
    "avg_color": "#1B3728"
}
  ],
  ambientVideo: {
    "id": "18419649",
    "videoUrl": "https://videos.pexels.com/video-files/18419649/18419649-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/18419649/3d-arcadian-audiovisual-cosmos-18419649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
