// Jest setup file for cleanup and configuration
process.on('unhandledRejection', (err) => {
  // Log but don't fail on unhandled rejections during tests
  console.warn('Unhandled rejection:', err)
})