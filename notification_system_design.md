# Notification System Design

## Overview
A simple notification system with backend APIs to send and retrieve notifications.

## Components
- Controller layer handles requests
- In-memory storage used
- Logging middleware captures events

## Flow
Client → API → Controller → Store → Response

## Logging
All actions (success/error) are logged via external logging API.
