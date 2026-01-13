// Utilities for handling Spotify track identifiers from QR scans.

// Extracts a Spotify track ID from either a spotify:track URI or an open.spotify.com URL.
export const parseSpotifyTrackFromScan = (value: string): string | null => {
  const text = value.trim();

  const uriMatch = text.match(/^spotify:track:([A-Za-z0-9]+)$/i);
  if (uriMatch?.[1]) return uriMatch[1];

  const urlMatch = text.match(/open\.spotify\.com\/track\/([A-Za-z0-9]+)(?:\?|$|\/)/i);
  if (urlMatch?.[1]) return urlMatch[1];

  return null;
};

// Builds the embeddable player URL for a track.
export const buildSpotifyEmbedUrl = (trackId: string): string =>
	`https://open.spotify.com/embed/track/${trackId}?utm_source=qr_player`;
