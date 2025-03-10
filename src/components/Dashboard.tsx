import React from 'react'
import { Grid, Paper, Typography, Box, Button, List, ListItem, ListItemText, Divider } from '@mui/material'
import { LineChart } from '@mui/x-charts'

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const workoutData = [
    { date: '2023-11-01', duration: 465 },
    { date: '2023-11-02', duration: 307 },
    { date: '2023-11-03', duration: 609 },
    { date: '2023-11-04', duration: 406 },
    { date: '2023-11-05', duration: 590 },
  ]

  const recentWorkouts = [
    { name: 'Full Body Workout', date: '2023-11-05', duration: '50 min' },
    { name: 'Cardio Session', date: '2023-11-04', duration: '40 min' },
    { name: 'Strength Training', date: '2023-11-03', duration: '60 min' },
  ]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, John!
      </Typography>
      <Grid container spacing={3}>
        {/* Workout Stats */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Workout Progress
            </Typography>
            <Box sx={{ width: '100%', height: 300 }}>
              <LineChart
                xAxis={[{ data: workoutData.map((_, i) => i) }]}
                series={[{
                  data: workoutData.map(d => d.duration),
                  area: true,
                }]}
                height={300}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button variant="contained" color="primary" fullWidth>
                Start New Workout
              </Button>
              <Button variant="outlined" color="primary" fullWidth>
                View Workout History
              </Button>
              <Button variant="outlined" color="primary" fullWidth>
                Update Profile
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Workouts */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Workouts
            </Typography>
            <List>
              {recentWorkouts.map((workout, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={workout.name}
                      secondary={`${workout.date} • ${workout.duration}`}
                    />
                    <Button variant="text" color="primary">
                      View Details
                    </Button>
                  </ListItem>
                  {index < recentWorkouts.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard