import express from 'express';
import app from './app';

const PORT = process.env.PORT || 3421;

app.listen(PORT, () => console.log(`🚀  Running on http://localhost:${PORT}`));
