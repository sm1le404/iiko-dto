export declare class AvailableTerminalsDto {
    correlationId: string;
    isAliveStatus: IsAliveStatus[];
}
export declare class IsAliveStatus {
    isAlive: boolean;
    terminalGroupId: string;
    organizationId: string;
}
