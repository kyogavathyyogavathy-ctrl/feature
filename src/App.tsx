/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserFrame } from './components/BrowserFrame';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { StatusOverview } from './components/StatusOverview';
import { DeviceControl } from './components/DeviceControl';
import { SensorMonitor } from './components/SensorMonitor';
import { HowSystemWorks } from './components/HowSystemWorks';
import { SensorSection } from './components/SensorSection';
import { AutomationRules } from './components/AutomationRules';
import { AlertCenter } from './components/AlertCenter';
import { EnergyManagement } from './components/EnergyManagement';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { TechnologyStack } from './components/TechnologyStack';
import { MetricsSection } from './components/MetricsSection';
import { FutureScope } from './components/FutureScope';
import { ProjectBenefits } from './components/ProjectBenefits';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';
import { AddAutomationModal } from './components/AddAutomationModal';
import { SignInModal } from './components/SignInModal';

import {
  INITIAL_DEVICES,
  INITIAL_SENSORS,
  INITIAL_RULES,
  INITIAL_ALERTS,
} from './services/mockIotService';
import { Device, SensorReading, AutomationRule, AlertNotification } from './types';

export default function App() {
  const [devices, setDevices] = useState<Device[]>(INITIAL_DEVICES);
  const [sensors, setSensors] = useState<SensorReading[]>(INITIAL_SENSORS);
  const [rules, setRules] = useState<AutomationRule[]>(INITIAL_RULES);
  const [alerts, setAlerts] = useState<AlertNotification[]>(INITIAL_ALERTS);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  // Modals state
  const [isAddRuleOpen, setIsAddRuleOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [signInMode, setSignInMode] = useState<'signin' | 'getstarted'>('signin');

  // Toast notification helper
  const addToast = (title: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, title, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle Device State (ON / OFF)
  const handleToggleDevice = (device: Device) => {
    const newState = !device.state;
    setDevices((prev) =>
      prev.map((d) =>
        d.id === device.id
          ? {
              ...d,
              state: newState,
              lastUpdated: 'Just now',
            }
          : d
      )
    );
    addToast(
      `${device.name} turned ${newState ? 'ON' : 'OFF'}`,
      newState ? 'success' : 'info'
    );
  };

  // Toggle Device Mode (AUTO / MANUAL)
  const handleToggleMode = (device: Device) => {
    const newMode = device.mode === 'AUTO' ? 'MANUAL' : 'AUTO';
    setDevices((prev) =>
      prev.map((d) => (d.id === device.id ? { ...d, mode: newMode } : d))
    );
    addToast(`${device.name} switched to ${newMode} mode`, 'info');
  };

  // Toggle Automation Rule (Active / Disabled)
  const handleToggleRule = (ruleId: string) => {
    setRules((prev) =>
      prev.map((r) => {
        if (r.id === ruleId) {
          const next = !r.enabled;
          addToast(
            `Rule "${r.name}" ${next ? 'activated' : 'disabled'}`,
            next ? 'success' : 'warning'
          );
          return { ...r, enabled: next };
        }
        return r;
      })
    );
  };

  // Add new Automation Rule
  const handleAddRule = (newRule: Omit<AutomationRule, 'id'>) => {
    const created: AutomationRule = {
      ...newRule,
      id: `rule_${Date.now()}`,
    };
    setRules((prev) => [created, ...prev]);
    addToast(`Added rule: ${created.name}`, 'success');
  };

  // Resolve an alert
  const handleResolveAlert = (alertId: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === alertId ? { ...a, resolved: true } : a))
    );
    addToast('Incident marked as resolved', 'info');
  };

  // Trigger a test alert
  const handleTriggerTestAlert = () => {
    const newAlert: AlertNotification = {
      id: `alt_test_${Date.now()}`,
      type: 'GAS',
      title: 'SIMULATED GAS DETECTED',
      message: 'Test button pressed: MQ-2 simulated 320 ppm surge. Emergency ventilations cycled.',
      severity: 'CRITICAL',
      timestamp: 'Just now',
      resolved: false,
    };
    setAlerts((prev) => [newAlert, ...prev]);
    addToast('Emergency test alert dispatched!', 'warning');
  };

  // Gentle live simulation telemetry update
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors((prev) =>
        prev.map((s) => {
          if (s.sensorType === 'temperature') {
            const delta = (Math.random() - 0.5) * 0.2;
            const nextVal = Math.round((Number(s.value) + delta) * 10) / 10;
            const bounded = Math.min(Math.max(nextVal, 23.8), 25.4);
            const history = [...s.history.slice(1), bounded];
            return { ...s, value: bounded, history };
          }
          if (s.sensorType === 'humidity') {
            const delta = Math.round((Math.random() - 0.5) * 1.2);
            const nextVal = Math.min(Math.max(Number(s.value) + delta, 54), 62);
            const history = [...s.history.slice(1), nextVal];
            return { ...s, value: nextVal, history };
          }
          if (s.sensorType === 'light') {
            const delta = Math.round((Math.random() - 0.5) * 2);
            const nextVal = Math.min(Math.max(Number(s.value) + delta, 68), 76);
            const history = [...s.history.slice(1), nextVal];
            return { ...s, value: nextVal, history };
          }
          return s;
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserFrame>
      {/* Sticky Browser Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenSignIn={() => {
          setSignInMode('signin');
          setIsSignInOpen(true);
        }}
        onOpenGetStarted={() => {
          setSignInMode('getstarted');
          setIsSignInOpen(true);
        }}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onExplore={() => scrollTo('features')}
          onOpenDashboard={() => scrollTo('dashboard')}
        />

        {/* 01 Introduction Section */}
        <IntroSection />

        {/* 02 Live Home Status Overview */}
        <StatusOverview sensors={sensors} />

        {/* 03 Device Control Module */}
        <DeviceControl
          devices={devices}
          onToggleDevice={handleToggleDevice}
          onToggleMode={handleToggleMode}
        />

        {/* 04 Sensor Monitoring & Charts */}
        <SensorMonitor sensors={sensors} />

        {/* 05 How the System Thinks (3-Layer Architecture Infographic) */}
        <HowSystemWorks />

        {/* 06 The Sensors (Collectible Technical Stickers) */}
        <SensorSection />

        {/* 07 Automation Rule Builder */}
        <AutomationRules
          rules={rules}
          onToggleRule={handleToggleRule}
          onOpenAddModal={() => setIsAddRuleOpen(true)}
        />

        {/* 08 Alert Center */}
        <AlertCenter
          alerts={alerts}
          onResolveAlert={handleResolveAlert}
          onTriggerTestAlert={handleTriggerTestAlert}
        />

        {/* 09 Energy Management */}
        <EnergyManagement />

        {/* 10 System Architecture (Under The Hood Blueprint) */}
        <ArchitectureDiagram />

        {/* 11 Technology Stack */}
        <TechnologyStack />

        {/* 12 Test Results & Verified Latency */}
        <MetricsSection />

        {/* 13 Future Scope */}
        <FutureScope />

        {/* 14 Project Benefits */}
        <ProjectBenefits />

        {/* 15 Final CTA */}
        <CTASection
          onOpenDashboard={() => scrollTo('dashboard')}
          onExplore={() => scrollTo('features')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Modals */}
      <AddAutomationModal
        isOpen={isAddRuleOpen}
        onClose={() => setIsAddRuleOpen(false)}
        onAddRule={handleAddRule}
      />

      <SignInModal
        isOpen={isSignInOpen}
        mode={signInMode}
        onClose={() => setIsSignInOpen(false)}
        onSuccess={(email) => {
          addToast(`Signed in as ${email}`, 'success');
        }}
      />
    </BrowserFrame>
  );
}
