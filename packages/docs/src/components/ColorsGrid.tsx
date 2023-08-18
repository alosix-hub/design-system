import { colors, colorsContrast } from '@alosix-hub-ui/tokens'
import { getContrast } from 'polished'
  
type Colors = typeof colors;
type Contrast = typeof colorsContrast;

interface ColorsGridProps {
  pickColors: Colors | Contrast
}

export function ColorsGrid({ pickColors }: ColorsGridProps) { 
  return Object.entries(pickColors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
