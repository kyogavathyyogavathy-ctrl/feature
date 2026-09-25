/**
 * Type definitions for Smart Home Automation IoT System
 */

export interface Device {
  id: string;
  name: string;
  room: string;
  type: 'light' | 'fan' | 'plug' | 'appliance';
  state: boolean;
  mode: 'AUTO' | 'MANUAL';
  powerWatts: number;
  lastUpdated: string;
}

export interface SensorReading {
  id: string;
  sensorType: 'temperature' | 'humidity' | 'motion' | 'gas' | 'light' | 'energy';
  name: string;
  value: number | string;
  unit: string;
  status: 'OPTIMAL' | 'SECURE' | 'NORMAL' | 'WARNING' | 'ALERT';
  history: number[]; // Points for mini graphic charts
  timestamp: string;
}

export interface SensorHardware {
  id: string;
  code: string;
  name: string;
  description: string;
  category: string;
  pin: string;
  interfaceType: string;
  accentColor: string;
}

export interface AutomationRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  ifField: string;
  ifOperator: '>' | '<' | '==' | '!=' | 'DETECTS';
  ifValue: string;
  thenDevice: string;
  thenAction: 'ON' | 'OFF' | 'TRIGGER ALERT';
  enabled: boolean;
}

export interface AlertNotification {
  id: string;
  type: 'GAS' | 'MOTION' | 'TEMPERATURE' | 'NETWORK';
  title: string;
  message: string;
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  timestamp: string;
  resolved: boolean;
}

export interface EnergyBreakdown {
  category: string;
  percentage: number;
  kwh: number;
  color: string;
}
