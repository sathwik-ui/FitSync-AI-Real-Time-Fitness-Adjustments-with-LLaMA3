import React from 'react'
import { Box, Paper, Typography, Grid, Card, CardContent, LinearProgress } from '@mui/material'
import { LineChart, BarChart } from '@mui/x-charts'

const Progress: React.FC = () => {
  // Mock data for demonstration
  const weightData = [
    { date: '2023-10-01', value: 72 },
    { date: '2023-10-15', value: 71.5 },
    { date: '2023-11-01', value: 70.8 },
    { date: '2023-11-15', value: 70 },
  ]

  const workoutStats = [
    { exercise: 'Push-ups', improvement: 50 },
    { exercise: 'Squats', improvement: 30 },
    { exercise: 'Plank', improvement: 40 },
    { exercise: 'Diamond Push-ups', improvement: 20 },
  ]

  const achievements = [
    { name: 'Workout Streak', value: 7, max: 10, description: '7 days in a row' },
    { name: 'Monthly Goal', value: 15, max: 20, description: '15 workouts this month' },
    { name: 'Personal Records', value: 3, max: 5, description: '3 new records set' },
  ]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Your Progress
      </Typography>
      <Grid container spacing={3}>
        {/* Weight Progress Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Weight Progress
            </Typography>
            <Box sx={{ width: '100%', height: 300 }}>
              <LineChart
                xAxis={[{ data: weightData.map((_, i) => i) }]}
                series={[{
                  data: weightData.map(d => d.value),
                  area: true,
                }]}
                height={300}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Achievements */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Achievements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {achievements.map((achievement, index) => (
                <Card key={index} variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      {achievement.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(achievement.value / achievement.max) * 100}
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Exercise Progress */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Exercise Improvements
            </Typography>
            <Box sx={{ width: '100%', height: 300 }}>
              <BarChart
                xAxis={[{ scaleType: 'band', data: workoutStats.map(d => d.exercise) }]}
                series={[{ data: workoutStats.map(d => d.improvement) }]}
                height={300}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Progress