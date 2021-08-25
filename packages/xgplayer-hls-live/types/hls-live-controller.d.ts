export default class HlsLiveController {
    constructor({ isMobile, ...rest }?: {
        isMobile: any;
    });
    firstFramePts: number;
    mse: any;
    _url: string;
    _playlist: any;
    _m3u8Url: string;
    _m3u8Loader: any;
    _m3u8RefreshTimer: any;
    _m3u8RefreshInterval: number;
    _m3u8RetryTimes: number;
    _m3u8RetryCount: number;
    _demuxQueue: any[];
    _decrypting: boolean;
    _segmentLoading: boolean;
    _currentLoadingKeyUrl: string;
    _segmentLoader: any;
    _segmentBuffer: any;
    _segmentKeyLoader: any;
    _crypto: any;
    _compat: any;
    _tickTimer: any;
    _tickInterval: number;
    _gapJumper: GapJumper;
    _currentDemuxSN: number;
    _currentBufferedSN: number;
    _isMobile: any;
    _opts: {
        lowLatencyMode: boolean;
        maxCatchUpRate: number;
        targetLatency: number;
        skipSegmentLatency: number;
        skipSegment: boolean;
        gapDistance: number;
    };
    load(url: any): void;
    reset(): void;
    reload(): void;
    destroy(): void;
    enableLowLatency(): void;
    disableLowLatency(): void;
    get _fetchOptions(): any;
    get _retryCount(): any;
    get _retryDelay(): any;
    get _videoPaused(): any;
    _end(): void;
    _tick: () => void;
    _stopTick(): void;
    _loadM3U8: (url: any) => void;
    _onLoadedM3U8: (buffer: any) => void;
    _shouldRetryM3U8(): boolean;
    _loadSegment(): void;
    _loadSegmentKey(keyUrl: any): void;
    _onLoadedSegmentKey: (buffer: any) => void;
    _onLoadedSegment: () => void;
    _decryptSegment(segment: any): boolean;
    _onSegmentDecrypted: () => void;
    _demux(): void;
    _onDemuxComplete: () => void;
    _onMetadataParsed: (type: any) => void;
    _setMetaToAudio(audioMeta: any): void;
    _setMetaToVideo(videoMeta: any): void;
    _onMediaSegment: () => void;
    _onBufferAppended: () => void;
    _onTimeUpdate: () => void;
    _catchUp(): void;
    _onLoadError: (_: any, error: any) => void;
    _emitError(error: any): void;
    init(): void;
}
import { GapJumper } from "./mse/gap-jumper";
